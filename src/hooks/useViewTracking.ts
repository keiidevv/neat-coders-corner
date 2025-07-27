import { useEffect } from 'react';
import { blogPosts } from '@/data/blogPosts';

export const useViewTracking = (postId: string) => {
  useEffect(() => {
    const incrementView = () => {
      const viewKey = `blog_views_${postId}`;
      const currentViews = parseInt(localStorage.getItem(viewKey) || '0');
      localStorage.setItem(viewKey, (currentViews + 1).toString());
    };

    // 페이지 로드 시 조회수 증가
    incrementView();
  }, [postId]);
};

export const getViewCount = (postId: string): number => {
  const viewKey = `blog_views_${postId}`;
  const localViews = parseInt(localStorage.getItem(viewKey) || '0');
  
  // 기본 조회수와 로컬 조회수 합산
  const baseViews = blogPosts.find(post => post.id === postId)?.views || 0;
  return baseViews + localViews;
};

export const getPopularPosts = (period: 'week' | 'month' = 'week') => {
  const sortedPosts = [...blogPosts]
    .map(post => ({
      ...post,
      totalViews: getViewCount(post.id)
    }))
    .sort((a, b) => b.totalViews - a.totalViews);

  return sortedPosts.slice(0, 5);
};