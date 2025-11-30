import { Button } from "@/components/ui/button";
import { 
  Pill, 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Stethoscope,
  Baby,
  Sparkles,
  LayoutGrid
} from "lucide-react";

interface Category {
  id: string;
  label: string;
  icon: typeof Pill;
}

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

const categories: Category[] = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "diabetes", label: "Diabetes", icon: Stethoscope },
  { id: "heart", label: "Heart Care", icon: Heart },
  { id: "pain", label: "Pain Relief", icon: Pill },
  { id: "vitamins", label: "Vitamins", icon: Sparkles },
  { id: "bone", label: "Bone Health", icon: Bone },
  { id: "eye", label: "Eye Care", icon: Eye },
  { id: "brain", label: "Brain Health", icon: Brain },
  { id: "baby", label: "Baby Care", icon: Baby },
];

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-foreground">Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id || 
            (category.id === "all" && !selectedCategory);
          const Icon = category.icon;
          
          return (
            <Button
              key={category.id}
              variant={isSelected ? "default" : "outline"}
              className="h-14 px-6 text-lg gap-2"
              onClick={() => onCategoryChange(category.id === "all" ? null : category.id)}
              data-testid={`button-category-${category.id}`}
            >
              <Icon className="w-5 h-5" />
              {category.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
