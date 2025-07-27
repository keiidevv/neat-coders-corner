import { Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

const BlogPost = ({ title, excerpt, date, readTime, tags, featured }: BlogPostProps) => {
  return (
    <Card className={`hover:shadow-lg transition-all duration-300 cursor-pointer group ${featured ? 'border-primary/20' : ''}`}>
      <CardHeader className="pb-3">
        {featured && (
          <Badge variant="secondary" className="w-fit mb-2 bg-primary/10 text-primary border-primary/20">
            추천 글
          </Badge>
        )}
        <h2 className="text-xl font-semibold font-inter group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h2>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center space-x-2">
          <Tag className="h-4 w-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;