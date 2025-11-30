import CartSummary from "../CartSummary";

export default function CartSummaryExample() {
  return (
    <div className="p-6 bg-background max-w-sm">
      <CartSummary
        subtotal={45.97}
        deliveryFee={0}
        discount={5.00}
        itemCount={3}
        onCheckout={() => console.log("Checkout clicked")}
      />
    </div>
  );
}
