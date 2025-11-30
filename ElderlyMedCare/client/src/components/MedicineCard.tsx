import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Pill } from "lucide-react";
import { useState } from "react";

interface Medicine {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  requiresPrescription: boolean;
  category: string;
  imageUrl?: string;
}

interface MedicineCardProps {
  medicine: Medicine;
  onAddToCart: (medicine: Medicine) => void;
  isInCart?: boolean;
}

export default function MedicineCard({
  medicine,
  onAddToCart,
  isInCart = false,
}: MedicineCardProps) {
  const [added, setAdded] = useState(isInCart);
  const discount = medicine.originalPrice 
    ? Math.round((1 - medicine.price / medicine.originalPrice) * 100) 
    : 0;

  const handleAddToCart = () => {
    onAddToCart(medicine);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Card className="overflow-hidden hover-elevate" data-testid={`card-medicine-${medicine.id}`}>
      <CardContent className="p-6 space-y-4">
        <div className="relative aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
          {medicine.imageUrl ? (
            <img
              src={medicine.imageUrl}
              alt={medicine.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <Pill className="w-20 h-20 text-muted-foreground/50" />
          )}
          {discount > 0 && (
            <Badge className="absolute top-3 left-3 text-base px-3 py-1">
              {discount}% OFF
            </Badge>
          )}
          {medicine.requiresPrescription && (
            <Badge variant="secondary" className="absolute top-3 right-3 text-sm">
              Rx Required
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground line-clamp-2 min-h-[3.5rem]">
            {medicine.name}
          </h3>
          <p className="text-lg text-muted-foreground line-clamp-2 min-h-[3.5rem]">
            {medicine.description}
          </p>
        </div>

        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-foreground">
            ${medicine.price.toFixed(2)}
          </span>
          {medicine.originalPrice && (
            <span className="text-xl text-muted-foreground line-through">
              ${medicine.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="space-y-3">
          {medicine.inStock ? (
            <p className="text-lg text-primary font-medium flex items-center gap-2">
              <Check className="w-5 h-5" />
              In Stock
            </p>
          ) : (
            <p className="text-lg text-destructive font-medium">Out of Stock</p>
          )}

          <Button
            className="w-full h-14 text-xl font-semibold gap-2"
            disabled={!medicine.inStock || added}
            onClick={handleAddToCart}
            data-testid={`button-add-to-cart-${medicine.id}`}
          >
            {added ? (
              <>
                <Check className="w-6 h-6" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
