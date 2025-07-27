import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import BlogPost from "@/components/BlogPost";
import CategoryFilter from "@/components/CategoryFilter";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";

const Index = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");
  const { posts, loading, error } = useBlogPosts();

  // 방문자 추적
  useVisitorTracking();

  const categories = Array.from(
    new Set(posts.map((post) => post.category))
  );

  const filteredPosts =
    activeCategory === "전체"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const handlePostClick = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center text-red-500">오류: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-inter">
      <main className="px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            꾸준히 멈추지 않는 <span className="text-primary">성장 기록</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            개발하며 배운 것들, 경험한 것들을 정리하고 공유하는 공간입니다.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => handlePostClick(post.id)}>
              <BlogPost
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.read_time}
                tags={post.tags}
                featured={post.featured}
                views={post.views}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
