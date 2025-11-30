import CartItem from "../CartItem";

export default function CartItemExample() {
  const item = {
    id: "1",
    name: "Metformin 500mg Tablets",
    price: 12.99,
    quantity: 2,
  };

  return (
    <div className="p-6 bg-background max-w-xl">
      <CartItem
        item={item}
        onUpdateQuantity={(id, qty) => console.log("Update quantity:", id, qty)}
        onRemove={(id) => console.log("Remove item:", id)}
      />
    </div>
  );
}
