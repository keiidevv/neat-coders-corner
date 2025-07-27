import { useState } from "react";
import {
  Folder,
  FolderOpen,
  FileText,
  User,
  TextCursorIcon,
  MousePointer2Icon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import PopularPosts from "./PopularPosts";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const navigate = useNavigate();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {}
  );

  // 카테고리별 게시글 개수 계산
  const categoryStats = blogPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.keys(categoryStats);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handlePostClick = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  const getCategoryPosts = (category: string) => {
    return blogPosts.filter((post) => post.category === category);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="p-4">
        {/* 프로필 섹션 */}
        <div className={collapsed ? "mb-4 text-center" : "mb-2 text-center"}>
          <div
            className={
              collapsed
                ? "w-8 h-8 mx-auto mb-2 rounded-full overflow-hidden border-2 border-primary/20 cursor-pointer hover:border-primary/40 transition-colors"
                : "w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 cursor-pointer hover:border-primary/40 transition-colors"
            }
            onClick={() => navigate("/")}
          >
            <img
              src="/lovable-uploads/5fbf1d63-89a1-4500-9b18-0faeb7a58205.png"
              alt="keiidev 프로필"
              className="w-full h-full object-cover"
            />
          </div>
          {!collapsed && (
            <>
              <div className="flex justify-center items-center gap-2 mb-2">
                <h2
                  className="text-xl font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
                  onClick={() => navigate("/about")}
                >
                  keiidev
                </h2>
                <button
                  onClick={() => navigate("/about")}
                  className="inline-flex items-center gap-1 px-3 py-1 text-[10.5px] bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                >
                  <MousePointer2Icon className="h-2 w-2" />
                  About
                </button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                풀스택 개발자로 스타트업에서 성장하며
                <br />
                배운 것들을 기록하고 공유합니다.
              </p>
            </>
          )}
        </div>

        {/* 카테고리 폴더 섹션 */}
        <SidebarGroup>
          <SidebarGroupLabel
            className={
              collapsed
                ? "text-center mb-2"
                : "text-xs font-semibold text-muted-foreground mb-3"
            }
          >
            {collapsed ? "📁" : "카테고리"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {categories.map((category) => {
                const isOpen = openCategories[category];
                const postCount = categoryStats[category];
                const categoryPosts = getCategoryPosts(category);

                return (
                  <SidebarMenuItem key={category}>
                    <Collapsible
                      open={isOpen}
                      onOpenChange={() => toggleCategory(category)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={
                            collapsed
                              ? "w-full justify-center p-2"
                              : "w-full justify-between hover:bg-accent/50 transition-colors"
                          }
                        >
                          <div
                            className={
                              collapsed
                                ? "flex items-center justify-center"
                                : "flex items-center gap-2"
                            }
                          >
                            {isOpen ? (
                              <FolderOpen className="h-4 w-4 text-primary" />
                            ) : (
                              <Folder className="h-4 w-4 text-muted-foreground" />
                            )}
                            {!collapsed && (
                              <>
                                <span className="font-medium">{category}</span>
                                <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
                                  {postCount}
                                </span>
                              </>
                            )}
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      {!collapsed && (
                        <CollapsibleContent className="ml-4 mt-1">
                          <div className="space-y-1">
                            {categoryPosts.map((post) => (
                              <button
                                key={post.id}
                                onClick={() => handlePostClick(post.id)}
                                className="w-full text-left flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 rounded-md transition-colors"
                              >
                                <FileText className="h-3 w-3" />
                                <span className="truncate">{post.title}</span>
                              </button>
                            ))}
                          </div>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto">
            <PopularPosts />
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
