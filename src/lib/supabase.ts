import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  read_time: string
  tags: string[]
  category: string
  featured: boolean
  views: number
  created_at: string
  updated_at: string
}

export type VisitorLog = {
  id: string
  ip_address: string
  user_agent: string
  page_url: string
  referrer: string | null
  session_id: string
  created_at: string
}