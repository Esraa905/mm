import { useState } from "react";
import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import MedicineCard from "@/components/MedicineCard";
import { Truck, Shield, Clock, HeartPulse } from "lucide-react";

// todo: remove mock functionality
const mockMedicines = [
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
];

interface HomeProps {
  onAddToCart: (medicine: any) => void;
  cartItems: any[];
}

export default function Home({ onAddToCart, cartItems }: HomeProps) {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredMedicines = mockMedicines.filter((med) => {
    const matchesSearch =
      searchQuery === "" ||
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const features = [
    {
      icon: Truck,
      title: "Free Home Delivery",
      description: "On orders above $50",
    },
    {
      icon: Shield,
      title: "100% Genuine",
      description: "Licensed pharmacy products",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here to help",
    },
    {
      icon: HeartPulse,
      title: "Expert Care",
      description: "Pharmacist consultation",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero onShopNowClick={() => setLocation("/medicines")} />

      <section className="py-12 bg-card border-y border-card-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Popular Medicines
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our most ordered medicines. All products are genuine and delivered safely.
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
      </section>
    </div>
  );
}
