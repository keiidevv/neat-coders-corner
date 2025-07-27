import { useParams } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">포스트를 찾을 수 없습니다</h1>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            돌아가기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          목록으로 돌아가기
        </Button>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold font-inter mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-muted-foreground mb-6">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed whitespace-pre-line text-foreground">
            {post.content}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;