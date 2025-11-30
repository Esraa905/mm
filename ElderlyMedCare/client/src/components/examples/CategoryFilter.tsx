import { useState } from "react";
import CategoryFilter from "../CategoryFilter";

export default function CategoryFilterExample() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="p-6 bg-background">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </div>
  );
}
