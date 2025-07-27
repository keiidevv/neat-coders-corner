import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import BlogPost from "@/components/BlogPost";
import CategoryFilter from "@/components/CategoryFilter";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = activeCategory === "전체" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handlePostClick = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <header className="h-14 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <SidebarTrigger className="ml-4" />
        <div className="flex-1">
          <Header />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            개발자의 <span className="text-primary">성장 이야기</span>
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => handlePostClick(post.id)}>
              <BlogPost
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                tags={post.tags}
                featured={post.featured}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
