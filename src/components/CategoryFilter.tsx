import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Badge 
        variant={activeCategory === "전체" ? "default" : "outline"}
        className="cursor-pointer hover:bg-primary/90 transition-colors"
        onClick={() => onCategoryChange("전체")}
      >
        전체
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className="cursor-pointer hover:bg-primary/90 transition-colors"
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryFilter;