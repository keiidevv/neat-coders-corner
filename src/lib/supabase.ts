import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oeovbciohnoxvdnrpzex.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lb3ZiY2lvaG5veHZkbnJwemV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5ODE1NjIsImV4cCI6MjA1MzU1NzU2Mn0.YxbIm9JUBXNLzXFjRU82CQ-rKGW6lJXC9oPgLi3EuI4'

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