import { useLocation } from "wouter";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";

interface CartItemData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

interface CartProps {
  items: CartItemData[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function Cart({
  items,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}: CartProps) {
  const [, setLocation] = useLocation();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 50 ? 0 : 5.99;
  const discount = subtotal >= 100 ? subtotal * 0.1 : 0;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
            <ShoppingCart className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Your Cart is Empty
          </h1>
          <p className="text-xl text-muted-foreground">
            Looks like you haven't added any medicines yet. Browse our catalog to find what you need.
          </p>
          <Button
            className="h-14 px-8 text-xl"
            onClick={() => setLocation("/medicines")}
            data-testid="button-browse-medicines"
          >
            Browse Medicines
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12"
            onClick={() => setLocation("/medicines")}
            data-testid="button-back-to-shop"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Your Cart</h1>
            <p className="text-lg text-muted-foreground">
              {items.length} {items.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <CartSummary
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              discount={discount}
              itemCount={items.reduce((sum, item) => sum + item.quantity, 0)}
              onCheckout={onCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
