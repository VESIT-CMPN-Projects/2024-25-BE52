import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || null;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || null;
export const supabase = createClient(supabaseUrl, supabaseKey);