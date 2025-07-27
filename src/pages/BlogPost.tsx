import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag, Eye, Home } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import Comments from "@/components/Comments";
import { useViewTracking, getViewCount } from "@/hooks/useViewTracking";

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 조회수 추적
  if (id) {
    useViewTracking(id);
  }

  const post = blogPosts.find((p) => p.id === id);
  const viewCount = id ? getViewCount(id) : 0;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">포스트를 찾을 수 없습니다</h1>
          <Button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          ></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="h-14 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <SidebarTrigger className="ml-4" />
        <div className="flex-1 px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            목록으로 돌아가기
          </Button>
        </div>
      </header>

      <main className="px-6 py-8 max-w-4xl mx-auto">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{viewCount.toLocaleString()} 조회</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-foreground">
            <div className="text-xl mb-8 text-muted-foreground leading-relaxed">
              {post.excerpt}
            </div>

            <div className="whitespace-pre-wrap leading-relaxed">
              {post.content}
            </div>
          </div>

          <Comments postId={post.id} />
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;
