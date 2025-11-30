import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Truck, ShieldCheck, CreditCard } from "lucide-react";

interface CartSummaryProps {
  subtotal: number;
  deliveryFee: number;
  discount?: number;
  onCheckout: () => void;
  itemCount: number;
}

export default function CartSummary({
  subtotal,
  deliveryFee,
  discount = 0,
  onCheckout,
  itemCount,
}: CartSummaryProps) {
  const total = subtotal - discount + deliveryFee;

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4 text-lg">
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
            </span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between text-primary">
              <span>Discount</span>
              <span className="font-medium">-${discount.toFixed(2)}</span>
            </div>
          )}
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Delivery</span>
            <span className="font-medium">
              {deliveryFee === 0 ? (
                <span className="text-primary">FREE</span>
              ) : (
                `$${deliveryFee.toFixed(2)}`
              )}
            </span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Button
          className="w-full h-16 text-xl font-semibold"
          onClick={onCheckout}
          disabled={itemCount === 0}
          data-testid="button-checkout"
        >
          <CreditCard className="w-6 h-6 mr-2" />
          Proceed to Checkout
        </Button>

        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Truck className="w-5 h-5 text-primary" />
            <span>Free delivery on orders over $50</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>100% Genuine Medicines</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
