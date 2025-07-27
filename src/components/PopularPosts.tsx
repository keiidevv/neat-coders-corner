import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getPopularPosts } from "@/hooks/useViewTracking";

const PopularPosts = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState<'week' | 'month'>('week');
  const popularPosts = getPopularPosts(period);

  const handlePostClick = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  return (
    <Card className="mt-6">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            인기글
          </CardTitle>
          <div className="flex gap-1">
            <Button
              variant={period === 'week' ? 'default' : 'ghost'}
              size="sm"
              className="text-xs h-6 px-2"
              onClick={() => setPeriod('week')}
            >
              주간
            </Button>
            <Button
              variant={period === 'month' ? 'default' : 'ghost'}
              size="sm"
              className="text-xs h-6 px-2"
              onClick={() => setPeriod('month')}
            >
              월간
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {popularPosts.map((post, index) => (
          <div
            key={post.id}
            className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
            onClick={() => handlePostClick(post.id)}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium line-clamp-2 mb-1">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Eye className="h-3 w-3" />
                <span>{post.totalViews.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PopularPosts;