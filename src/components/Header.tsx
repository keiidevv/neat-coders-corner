import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold font-inter">
              <span className="text-primary">Dev</span>Blog
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">홈</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">React</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">TypeScript</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Web</a>
            </nav>
          </div>
          <div className="relative w-64 hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="검색..." 
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;