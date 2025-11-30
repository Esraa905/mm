import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package, Truck, Home, Phone } from "lucide-react";

interface OrderConfirmationProps {
  orderId: string;
  estimatedDelivery: string;
  deliveryAddress: string;
  totalAmount: number;
  onContinueShopping: () => void;
  onViewOrders: () => void;
}

export default function OrderConfirmation({
  orderId,
  estimatedDelivery,
  deliveryAddress,
  totalAmount,
  onContinueShopping,
  onViewOrders,
}: OrderConfirmationProps) {
  const steps = [
    { icon: CheckCircle, label: "Order Placed", active: true },
    { icon: Package, label: "Preparing", active: false },
    { icon: Truck, label: "On the Way", active: false },
    { icon: Home, label: "Delivered", active: false },
  ];

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="space-y-4">
        <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <CheckCircle className="w-14 h-14 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-foreground">Order Confirmed!</h1>
        <p className="text-xl text-muted-foreground">
          Thank you for your order. We'll send you updates via phone.
        </p>
      </div>

      <Card>
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-lg text-muted-foreground">Order Number</p>
            <p className="text-4xl font-bold text-primary" data-testid="text-order-id">
              {orderId}
            </p>
          </div>

          <div className="flex justify-between py-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    step.active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <step.icon className="w-7 h-7" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    step.active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Estimated Delivery</p>
              <p className="text-xl font-semibold text-foreground" data-testid="text-delivery-date">
                {estimatedDelivery}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Total Amount</p>
              <p className="text-xl font-semibold text-foreground" data-testid="text-total">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="text-left space-y-2">
            <p className="text-lg text-muted-foreground">Delivery Address</p>
            <p className="text-xl text-foreground" data-testid="text-address">
              {deliveryAddress}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="bg-accent/50 rounded-lg p-6">
        <div className="flex items-center justify-center gap-3 text-lg">
          <Phone className="w-6 h-6 text-primary" />
          <span>Need help? Call us at </span>
          <a href="tel:1800-123-4567" className="text-primary font-semibold">
            1800-123-4567
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          className="h-14 px-8 text-xl flex-1"
          onClick={onViewOrders}
          data-testid="button-view-orders"
        >
          View My Orders
        </Button>
        <Button
          className="h-14 px-8 text-xl flex-1"
          onClick={onContinueShopping}
          data-testid="button-continue-shopping"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
