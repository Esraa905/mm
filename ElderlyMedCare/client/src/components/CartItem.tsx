import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, Pill } from "lucide-react";

interface CartItemData {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

interface CartItemProps {
  item: CartItemData;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div
      className="flex gap-4 p-4 bg-card rounded-lg border border-card-border"
      data-testid={`cart-item-${item.id}`}
    >
      <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Pill className="w-10 h-10 text-muted-foreground/50" />
        )}
      </div>

      <div className="flex-1 min-w-0 space-y-3">
        <div className="flex justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground line-clamp-2">
            {item.name}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-destructive flex-shrink-0"
            onClick={() => onRemove(item.id)}
            data-testid={`button-remove-${item.id}`}
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12"
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
              disabled={item.quantity <= 1}
              data-testid={`button-decrease-${item.id}`}
            >
              <Minus className="w-5 h-5" />
            </Button>
            <span className="text-2xl font-semibold w-12 text-center">
              {item.quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              data-testid={`button-increase-${item.id}`}
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>

          <div className="text-2xl font-bold text-foreground">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
