import CheckoutForm from "../CheckoutForm";

export default function CheckoutFormExample() {
  return (
    <div className="p-6 bg-background">
      <CheckoutForm
        onComplete={(data) => console.log("Order placed:", data)}
        onBack={() => console.log("Back to cart")}
      />
    </div>
  );
}
