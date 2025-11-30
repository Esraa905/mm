import { Button } from "@/components/ui/button";
import { Truck, Shield, Clock, HeartPulse } from "lucide-react";

interface HeroProps {
  onShopNowClick: () => void;
}

export default function Hero({ onShopNowClick }: HeroProps) {
  const features = [
    { icon: Truck, label: "Free Home Delivery" },
    { icon: Shield, label: "100% Genuine Medicines" },
    { icon: Clock, label: "24/7 Support" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Order Your Medicines
                <span className="text-primary block mt-2">With Confidence</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                Simple, safe, and reliable medicine delivery right to your doorstep. 
                Designed with care for seniors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="h-16 px-12 text-xl font-semibold"
                onClick={onShopNowClick}
                data-testid="button-shop-now"
              >
                <HeartPulse className="w-6 h-6 mr-3" />
                Shop Medicines
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-12 text-xl"
                data-testid="button-call-us"
              >
                Call Us: 1800-123-4567
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-lg text-muted-foreground"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl transform rotate-3" />
            <div className="relative bg-card border border-card-border rounded-3xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <HeartPulse className="w-16 h-16 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Trusted by 50,000+</h3>
                  <p className="text-lg text-muted-foreground mt-2">Senior citizens across the country</p>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10k+</div>
                    <div className="text-sm text-muted-foreground">Medicines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Cities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">4.9</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
