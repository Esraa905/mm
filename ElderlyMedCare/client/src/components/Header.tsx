import { Link, useLocation } from "wouter";
import { ShoppingCart, User, Menu, X, Pill, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface HeaderProps {
  cartItemCount: number;
  isLoggedIn: boolean;
  userName?: string;
  onLoginClick: () => void;
  onCartClick: () => void;
  onLogoutClick?: () => void;
}

export default function Header({
  cartItemCount,
  isLoggedIn,
  userName,
  onLoginClick,
  onCartClick,
  onLogoutClick,
}: HeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Medicines", path: "/medicines" },
    { label: "My Orders", path: "/orders" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link href="/" className="flex items-center gap-3" data-testid="link-home-logo">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <Pill className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-foreground">MediCare</span>
              <span className="text-2xl font-bold text-primary"> Express</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  className="text-xl px-6 h-12"
                  data-testid={`link-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:1800-123-4567"
              className="hidden md:flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-5 h-5" />
              <span>1800-123-4567</span>
            </a>

            <Button
              variant="outline"
              className="relative h-12 px-4 text-lg gap-2"
              onClick={onCartClick}
              data-testid="button-cart"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <Badge
                  variant="default"
                  className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-sm"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {isLoggedIn ? (
              <div className="hidden sm:flex items-center gap-2">
                <Button
                  variant="ghost"
                  className="h-12 px-4 text-lg gap-2"
                  data-testid="button-account"
                >
                  <User className="w-6 h-6" />
                  <span className="max-w-24 truncate">{userName}</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-6 text-lg"
                  onClick={onLogoutClick}
                  data-testid="button-logout"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                className="h-12 px-6 text-lg hidden sm:flex"
                onClick={onLoginClick}
                data-testid="button-login"
              >
                <User className="w-5 h-5 mr-2" />
                Login
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-12 w-12"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={location === item.path ? "secondary" : "ghost"}
                    className="w-full justify-start text-xl h-14 px-4"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              {!isLoggedIn && (
                <Button
                  className="w-full justify-start text-xl h-14 px-4 mt-2"
                  onClick={() => {
                    onLoginClick();
                    setMobileMenuOpen(false);
                  }}
                  data-testid="button-mobile-login"
                >
                  <User className="w-5 h-5 mr-2" />
                  Login
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
