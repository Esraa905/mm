import OrderCard from "../OrderCard";

export default function OrderCardExample() {
  const order = {
    id: "MC-2024-78543",
    date: "January 10, 2024",
    status: "delivered" as const,
    items: [
      { name: "Metformin 500mg", quantity: 2, price: 12.99 },
      { name: "Vitamin D3", quantity: 1, price: 8.99 },
    ],
    total: 34.97,
  };

  return (
    <div className="p-6 bg-background max-w-xl">
      <OrderCard
        order={order}
        onViewDetails={(id) => console.log("View order:", id)}
        onReorder={(id) => console.log("Reorder:", id)}
      />
    </div>
  );
}
