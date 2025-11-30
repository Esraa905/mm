import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Medicines from "@/pages/Medicines";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderSuccess from "@/pages/OrderSuccess";
import Orders from "@/pages/Orders";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import NotFound from "@/pages/not-found";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

function App() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  // todo: remove mock functionality - replace with real auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | undefined>();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterInModal, setShowRegisterInModal] = useState(false);
  
  // todo: remove mock functionality - replace with real cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // todo: remove mock functionality - replace with real order data
  const [lastOrder, setLastOrder] = useState<{
    id: string;
    total: number;
    address: string;
  } | null>(null);

  const handleAddToCart = (medicine: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === medicine.id);
      if (existing) {
        return prev.map((item) =>
          item.id === medicine.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: medicine.id,
          name: medicine.name,
          price: medicine.price,
          quantity: 1,
          imageUrl: medicine.imageUrl,
        },
      ];
    });
    toast({
      title: "Added to Cart",
      description: `${medicine.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
    });
  };

  const handleLogin = (email: string, _password: string) => {
    // todo: remove mock functionality - implement real login
    setIsLoggedIn(true);
    setUserName(email.split("@")[0]);
    setShowLoginModal(false);
    toast({
      title: "Welcome Back!",
      description: "You have successfully signed in.",
    });
  };

  const handleRegister = (data: any) => {
    // todo: remove mock functionality - implement real registration
    setIsLoggedIn(true);
    setUserName(data.fullName);
    setShowLoginModal(false);
    toast({
      title: "Account Created!",
      description: "Welcome to MediCare Express.",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName(undefined);
    toast({
      title: "Signed Out",
      description: "You have been signed out successfully.",
    });
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setLocation("/checkout");
  };

  const handleOrderComplete = (deliveryData: any) => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const deliveryFee = subtotal >= 50 ? 0 : 5.99;
    const discount = subtotal >= 100 ? subtotal * 0.1 : 0;
    const total = subtotal - discount + deliveryFee;

    // todo: remove mock functionality - generate real order ID from backend
    const orderId = `MC-${new Date().getFullYear()}-${Math.floor(
      Math.random() * 90000 + 10000
    )}`;

    setLastOrder({
      id: orderId,
      total,
      address: `${deliveryData.address}, ${deliveryData.city}, ${deliveryData.zipCode}`,
    });

    setCartItems([]);
    setLocation("/order-success");
    
    toast({
      title: "Order Placed!",
      description: `Your order ${orderId} has been placed successfully.`,
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background flex flex-col">
          <Header
            cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            isLoggedIn={isLoggedIn}
            userName={userName}
            onLoginClick={() => {
              setShowRegisterInModal(false);
              setShowLoginModal(true);
            }}
            onCartClick={() => setLocation("/cart")}
            onLogoutClick={handleLogout}
          />

          <main className="flex-1">
            <Switch>
              <Route path="/">
                <Home onAddToCart={handleAddToCart} cartItems={cartItems} />
              </Route>
              <Route path="/medicines">
                <Medicines onAddToCart={handleAddToCart} cartItems={cartItems} />
              </Route>
              <Route path="/cart">
                <Cart
                  items={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveFromCart}
                  onCheckout={handleCheckout}
                />
              </Route>
              <Route path="/checkout">
                <Checkout
                  items={cartItems}
                  onComplete={handleOrderComplete}
                  onBack={() => setLocation("/cart")}
                />
              </Route>
              <Route path="/order-success">
                {lastOrder ? (
                  <OrderSuccess
                    orderId={lastOrder.id}
                    totalAmount={lastOrder.total}
                    deliveryAddress={lastOrder.address}
                    onContinueShopping={() => setLocation("/")}
                    onViewOrders={() => setLocation("/orders")}
                  />
                ) : (
                  <NotFound />
                )}
              </Route>
              <Route path="/orders">
                <Orders
                  isLoggedIn={isLoggedIn}
                  onLoginClick={() => {
                    setShowRegisterInModal(false);
                    setShowLoginModal(true);
                  }}
                />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </main>

          <Footer />

          <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
            <DialogContent className="sm:max-w-md p-0 gap-0 border-0 bg-transparent shadow-none">
              {showRegisterInModal ? (
                <RegisterForm
                  onRegister={handleRegister}
                  onLoginClick={() => setShowRegisterInModal(false)}
                />
              ) : (
                <LoginForm
                  onLogin={handleLogin}
                  onRegisterClick={() => setShowRegisterInModal(true)}
                  onForgotPassword={() => {
                    toast({
                      title: "Password Reset",
                      description: "Please call 1800-123-4567 for password assistance.",
                    });
                  }}
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
