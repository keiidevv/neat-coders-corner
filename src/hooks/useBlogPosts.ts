import { useState, useEffect, useCallback } from "react";
import { supabase, type BlogPost } from "@/lib/supabase";

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
        return;
      }

      setPosts(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const getPostById = useCallback(
    async (id: string): Promise<BlogPost | null> => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching post:", error);
          return null;
        }

        return data;
      } catch (err) {
        console.error("Error fetching post:", err);
        return null;
      }
    },
    []
  );

  const incrementViews = useCallback(async (postId: string) => {
    try {
      // First get current views
      const { data: currentPost } = await supabase
        .from("blog_posts")
        .select("views")
        .eq("id", postId)
        .single();

      if (currentPost) {
        // Increment views
        const { error } = await supabase
          .from("blog_posts")
          .update({ views: (currentPost.views || 0) + 1 })
          .eq("id", postId);

        if (error) {
          console.error("Error incrementing views:", error);
        }
      }
    } catch (err) {
      console.error("Error incrementing views:", err);
    }
  }, []);

  return {
    posts,
    loading,
    error,
    fetchPosts,
    getPostById,
    incrementViews,
  };
};
