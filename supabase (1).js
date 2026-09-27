import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ewynuqmldidjdcfjruvn.supabase.co";
const supabaseKey = "sb_publishable_Yib-ki9diI3uEhaXZshCsw_5GsVzhmK";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);
