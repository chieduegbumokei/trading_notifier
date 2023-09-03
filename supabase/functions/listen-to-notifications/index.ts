import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https:esm.sh/@supabase/supabase-js@2.7.0";

const url = Deno.env.get("_SUPABASE_URL") as string;
const key = Deno.env.get("_SUPABASE_SERVICE_KEY") as string;
const supabase = createClient(url, key);

let msg = new TextEncoder().encode("data: hello\r\n\r\n");

serve(async (req) => {
  const url = await req.url;
  const searchParams = new URL(url).searchParams;
  const channelId = searchParams.get("channelId") ?? "";
  const authCode = searchParams.get("authCode") ?? "";
  const lookupText = searchParams.get("lookupText") ?? "";

  let timerId: number | NodeJS.Timer | undefined;
  const body = new ReadableStream({
    start(controller) {
      timerId = setInterval(async () => {
        try {
          if (
            authCode.length === 0 ||
            channelId.length === 0 ||
            lookupText.length === 0
          )
            throw new Error("Empty Credentials");
          const messages = await retrieveMessages(authCode, channelId);
          const convertedMessages = messages.map((message: any) =>
            convertMessagesFromJson(message)
          );
          const notifcations = await getNotifications();
          const notifcationsIds = notifcations.map(
            (notification) => notification.id
          );
          const filteredMessages = filterNotificationsWithLookupText(
            convertedMessages,
            lookupText,
            notifcationsIds
          );

          if (filteredMessages.length > 0) {
            insertNotifications(filteredMessages);
            msg = new TextEncoder().encode(
              `data: ${JSON.stringify(filteredMessages)}\r\n\r\n`
            );
            controller.enqueue(msg);
          }
        } catch (error) {
          console.log(error);
          controller.close();
        }
      }, 5000);
    },
    cancel() {
      if (typeof timerId === "number" || timerId) {
        clearInterval(timerId);
      }
    },
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
    },
  });
});

const retrieveMessages = async (authCode, channelId, limit = 10) => {
  const url = `https://discord.com/api/v9/channels/${channelId}/messages?limit=${limit}`;
  const headers = new Headers();
  headers.set("authorization", authCode);
  const response = await fetch(url, { headers });
  const data = response.json();
  return data;
};

const getNotifications = async () => {
  const { data: notifications } = await supabase
    .from("Notifications")
    .select("*");
  return notifications;
};

const insertNotifications = async (notifications) => {
  await supabase.from("Notifications").insert(notifications).select();
};

const filterNotificationsWithLookupText = (notifcations, text, ids) =>
  notifcations.filter(
    (notification) =>
      notification.content.toLowerCase().includes(text.toLowerCase()) &&
      !ids.includes(+notification.id)
  );

export const convertMessagesFromJson = (data: any) => {
  const id = data.id;
  const username = data.author.username;
  const timestamp = data.timestamp;
  const content = data.content;
  const messageLink = `https://discord.com/channels/@me/${data.author.id}`;

  const message = {
    id,
    username,
    timestamp,
    content,
    messageLink,
  };

  return message;
};

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
