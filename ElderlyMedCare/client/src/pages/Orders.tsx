import OrderCard from "@/components/OrderCard";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { useLocation } from "wouter";

// todo: remove mock functionality
const mockOrders = [
  {
    id: "MC-2024-78543",
    date: "January 10, 2024",
    status: "delivered" as const,
    items: [
      { name: "Metformin 500mg", quantity: 2, price: 12.99 },
      { name: "Vitamin D3", quantity: 1, price: 14.99 },
    ],
    total: 40.97,
  },
  {
    id: "MC-2024-78542",
    date: "January 5, 2024",
    status: "shipped" as const,
    items: [
      { name: "Aspirin 100mg", quantity: 1, price: 8.49 },
      { name: "Calcium + Vitamin D", quantity: 2, price: 16.99 },
    ],
    total: 42.47,
  },
  {
    id: "MC-2024-78541",
    date: "December 28, 2023",
    status: "delivered" as const,
    items: [
      { name: "Eye Drops Lubricant", quantity: 2, price: 9.99 },
      { name: "Omega-3 Fish Oil", quantity: 1, price: 19.99 },
    ],
    total: 39.97,
  },
];

interface OrdersProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
}

export default function Orders({ isLoggedIn, onLoginClick }: OrdersProps) {
  const [, setLocation] = useLocation();

  if (!isLoggedIn) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
            <Package className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            View Your Orders
          </h1>
          <p className="text-xl text-muted-foreground">
            Please sign in to view your order history and track deliveries.
          </p>
          <Button
            className="h-14 px-8 text-xl"
            onClick={onLoginClick}
            data-testid="button-login-to-view-orders"
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground">My Orders</h1>
          <p className="text-xl text-muted-foreground mt-2">
            View and track your medicine orders
          </p>
        </div>

        {mockOrders.length === 0 ? (
          <div className="text-center py-12 space-y-6">
            <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
              <Package className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">
              No Orders Yet
            </h2>
            <p className="text-lg text-muted-foreground">
              You haven't placed any orders. Start shopping now!
            </p>
            <Button
              className="h-14 px-8 text-xl"
              onClick={() => setLocation("/medicines")}
            >
              Browse Medicines
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onViewDetails={(id) => console.log("View order:", id)}
                onReorder={(id) => console.log("Reorder:", id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
