import OrderConfirmation from "../OrderConfirmation";

export default function OrderConfirmationExample() {
  return (
    <div className="p-6 bg-background">
      <OrderConfirmation
        orderId="MC-2024-78543"
        estimatedDelivery="Monday, January 15, 2024"
        deliveryAddress="123 Main Street, Apt 4B, New York, NY 10001"
        totalAmount={45.97}
        onContinueShopping={() => console.log("Continue shopping")}
        onViewOrders={() => console.log("View orders")}
      />
    </div>
  );
}
