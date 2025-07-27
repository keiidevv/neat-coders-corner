import { supabase } from '@/lib/supabase'
import { blogPosts } from '@/data/blogPosts'

export const migrateBlogPosts = async () => {
  try {
    console.log('Starting blog posts migration...')
    
    // Transform existing data to match Supabase schema
    const postsForSupabase = blogPosts.map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      date: post.date,
      read_time: post.readTime,
      tags: post.tags,
      category: post.category,
      featured: post.featured || false,
      views: post.views || 0
    }))

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(postsForSupabase)
      .select()

    if (error) {
      console.error('Migration error:', error)
      return { success: false, error }
    }

    console.log('Migration successful:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Migration failed:', error)
    return { success: false, error }
  }
}

export const checkExistingPosts = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id')

  if (error) {
    console.error('Error checking existing posts:', error)
    return []
  }

  return data || []
}