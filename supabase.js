import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "https://SEU-PROJETO.supabase.co"
const SUPABASE_KEY = "SUA-ANON-KEY"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)