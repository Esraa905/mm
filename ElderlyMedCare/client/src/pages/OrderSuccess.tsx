import OrderConfirmation from "@/components/OrderConfirmation";

interface OrderSuccessProps {
  orderId: string;
  totalAmount: number;
  deliveryAddress: string;
  onContinueShopping: () => void;
  onViewOrders: () => void;
}

export default function OrderSuccess({
  orderId,
  totalAmount,
  deliveryAddress,
  onContinueShopping,
  onViewOrders,
}: OrderSuccessProps) {
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 3);
  
  const estimatedDelivery = deliveryDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <OrderConfirmation
          orderId={orderId}
          estimatedDelivery={estimatedDelivery}
          deliveryAddress={deliveryAddress}
          totalAmount={totalAmount}
          onContinueShopping={onContinueShopping}
          onViewOrders={onViewOrders}
        />
      </div>
    </div>
  );
}
