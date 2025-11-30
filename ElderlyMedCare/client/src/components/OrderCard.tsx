import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Truck, CheckCircle, Clock, RefreshCcw, ChevronRight } from "lucide-react";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  items: OrderItem[];
  total: number;
}

interface OrderCardProps {
  order: Order;
  onViewDetails: (orderId: string) => void;
  onReorder: (orderId: string) => void;
}

const statusConfig = {
  processing: {
    label: "Processing",
    icon: Clock,
    variant: "secondary" as const,
  },
  shipped: {
    label: "On the Way",
    icon: Truck,
    variant: "default" as const,
  },
  delivered: {
    label: "Delivered",
    icon: CheckCircle,
    variant: "default" as const,
  },
  cancelled: {
    label: "Cancelled",
    icon: Package,
    variant: "destructive" as const,
  },
};

export default function OrderCard({ order, onViewDetails, onReorder }: OrderCardProps) {
  const status = statusConfig[order.status];
  const StatusIcon = status.icon;

  return (
    <Card className="hover-elevate" data-testid={`order-card-${order.id}`}>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl font-semibold text-foreground">
                Order #{order.id}
              </h3>
              <Badge variant={status.variant} className="text-base px-3 py-1 gap-1">
                <StatusIcon className="w-4 h-4" />
                {status.label}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground">{order.date}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-foreground">
              ${order.total.toFixed(2)}
            </p>
            <p className="text-muted-foreground">
              {order.items.length} {order.items.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {order.items.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-lg text-muted-foreground"
            >
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          {order.items.length > 2 && (
            <p className="text-muted-foreground">
              +{order.items.length - 2} more items
            </p>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            className="flex-1 h-12 text-lg gap-2"
            onClick={() => onViewDetails(order.id)}
            data-testid={`button-view-order-${order.id}`}
          >
            View Details
            <ChevronRight className="w-5 h-5" />
          </Button>
          {order.status === "delivered" && (
            <Button
              className="flex-1 h-12 text-lg gap-2"
              onClick={() => onReorder(order.id)}
              data-testid={`button-reorder-${order.id}`}
            >
              <RefreshCcw className="w-5 h-5" />
              Reorder
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
