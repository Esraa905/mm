import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import MedicineCard from "@/components/MedicineCard";

// todo: remove mock functionality
const allMedicines = [
  {
    id: "1",
    name: "Metformin 500mg Tablets",
    description: "For diabetes management. 60 tablets per pack.",
    price: 12.99,
    originalPrice: 15.99,
    inStock: true,
    requiresPrescription: true,
    category: "diabetes",
  },
  {
    id: "2",
    name: "Aspirin 100mg",
    description: "Pain relief and heart health. 100 tablets.",
    price: 8.49,
    inStock: true,
    requiresPrescription: false,
    category: "heart",
  },
  {
    id: "3",
    name: "Vitamin D3 1000 IU",
    description: "Essential vitamin for bone health. 90 softgels.",
    price: 14.99,
    originalPrice: 18.99,
    inStock: true,
    requiresPrescription: false,
    category: "vitamins",
  },
  {
    id: "4",
    name: "Calcium + Vitamin D",
    description: "Strong bones formula. 120 tablets.",
    price: 16.99,
    inStock: true,
    requiresPrescription: false,
    category: "bone",
  },
  {
    id: "5",
    name: "Omeprazole 20mg",
    description: "Acid reflux relief. 28 capsules.",
    price: 11.49,
    inStock: false,
    requiresPrescription: true,
    category: "pain",
  },
  {
    id: "6",
    name: "Eye Drops Lubricant",
    description: "Relieves dry eyes. 15ml bottle.",
    price: 9.99,
    inStock: true,
    requiresPrescription: false,
    category: "eye",
  },
  {
    id: "7",
    name: "Lisinopril 10mg",
    description: "Blood pressure medication. 30 tablets.",
    price: 15.99,
    inStock: true,
    requiresPrescription: true,
    category: "heart",
  },
  {
    id: "8",
    name: "Glucosamine 1500mg",
    description: "Joint health supplement. 60 tablets.",
    price: 22.99,
    originalPrice: 27.99,
    inStock: true,
    requiresPrescription: false,
    category: "bone",
  },
  {
    id: "9",
    name: "Omega-3 Fish Oil",
    description: "Heart and brain health. 120 softgels.",
    price: 19.99,
    inStock: true,
    requiresPrescription: false,
    category: "vitamins",
  },
  {
    id: "10",
    name: "Ginkgo Biloba 120mg",
    description: "Memory and cognitive support. 90 capsules.",
    price: 18.99,
    inStock: true,
    requiresPrescription: false,
    category: "brain",
  },
  {
    id: "11",
    name: "Ibuprofen 400mg",
    description: "Pain and inflammation relief. 50 tablets.",
    price: 7.99,
    inStock: true,
    requiresPrescription: false,
    category: "pain",
  },
  {
    id: "12",
    name: "Insulin Glargine",
    description: "Long-acting insulin. Pen device.",
    price: 89.99,
    inStock: true,
    requiresPrescription: true,
    category: "diabetes",
  },
];

interface MedicinesProps {
  onAddToCart: (medicine: any) => void;
  cartItems: any[];
}

export default function Medicines({ onAddToCart, cartItems }: MedicinesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredMedicines = allMedicines.filter((med) => {
    const matchesSearch =
      searchQuery === "" ||
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Browse Medicines
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Find the medicines you need. All products are genuine and delivered safely to your home.
          </p>
        </div>

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={() => console.log("Search:", searchQuery)}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="flex items-center justify-between">
          <p className="text-lg text-muted-foreground">
            Showing {filteredMedicines.length} medicines
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredMedicines.map((medicine) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
              onAddToCart={onAddToCart}
              isInCart={cartItems.some((item) => item.id === medicine.id)}
            />
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No medicines found. Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
