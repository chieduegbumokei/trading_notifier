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
  const { channelId, authCode } = await req.json();
  try {
    const { data: updatedUser } = await supabase
      .from("Users")
      .update({
        channelId,
        authCode,
      })
      .eq("id", 1)
      .select();

    return new Response(JSON.stringify(updatedUser[0]), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
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
