import MedicineCard from "../MedicineCard";

export default function MedicineCardExample() {
  const medicine = {
    id: "1",
    name: "Metformin 500mg Tablets",
    description: "For diabetes management. 60 tablets per pack.",
    price: 12.99,
    originalPrice: 15.99,
    inStock: true,
    requiresPrescription: true,
    category: "diabetes",
  };

  return (
    <div className="p-6 bg-background max-w-sm">
      <MedicineCard
        medicine={medicine}
        onAddToCart={(m) => console.log("Added to cart:", m.name)}
      />
    </div>
  );
}
