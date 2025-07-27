import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

// Generate a session ID for the current browser session
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('blog_session_id')
  if (!sessionId) {
    sessionId = Date.now().toString() + Math.random().toString(36).substr(2, 9)
    sessionStorage.setItem('blog_session_id', sessionId)
  }
  return sessionId
}

export const useVisitorTracking = (postId?: string) => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const sessionId = getSessionId()
        
        const logData = {
          ip_address: null, // Will be handled by Supabase Edge Functions if needed
          user_agent: navigator.userAgent,
          page_url: window.location.href,
          referrer: document.referrer || null,
          session_id: sessionId,
          post_id: postId || null
        }

        const { error } = await supabase
          .from('visitor_logs')
          .insert([logData])

        if (error) {
          console.error('Error logging visit:', error)
        }
      } catch (err) {
        console.error('Error tracking visit:', err)
      }
    }

    // Track visit after a small delay to ensure page is loaded
    const timer = setTimeout(trackVisit, 1000)
    
    return () => clearTimeout(timer)
  }, [postId])
}

export const getVisitorStats = async (days: number = 7) => {
  try {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    
    const { data, error } = await supabase
      .from('visitor_logs')
      .select('*')
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching visitor stats:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Error fetching visitor stats:', err)
    return []
  }
}