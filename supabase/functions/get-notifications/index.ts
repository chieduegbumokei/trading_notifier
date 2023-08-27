import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https:esm.sh/@supabase/supabase-js@2.7.0";

const url = Deno.env.get("_SUPABASE_URL") as string;
const key = Deno.env.get("_SUPABASE_SERVICE_KEY") as string;
const supabase = createClient(url, key);

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  const { method } = req;

  if (method !== "GET") {
    return new Response("ok", { headers: corsHeaders });
  }
  try {
    const { data: notifications } = await supabase
      .from("Notifications")
      .select("*");

    return new Response(JSON.stringify(notifications), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error.message), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
      status: 400,
    });
  }
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
