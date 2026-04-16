import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "https://niedwjyzvmkgwfdwhacf.supabase.co"
const SUPABASE_KEY = "sb_publishable_izTWyBI32u5erxhM0vzxeQ_4O7v92Yh"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)