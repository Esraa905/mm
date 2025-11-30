import { Pill, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <Pill className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">MediCare</span>
                <span className="text-xl font-bold text-primary"> Express</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your trusted partner for safe and reliable medicine delivery. Serving seniors with care since 2020.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/medicines" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Browse Medicines
              </Link>
              <Link href="/orders" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                My Orders
              </Link>
              <Link href="/about" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:1800-123-4567"
                className="flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                1800-123-4567 (Toll Free)
              </a>
              <a
                href="mailto:support@medicare-express.com"
                className="flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                support@medicare-express.com
              </a>
              <div className="flex items-start gap-3 text-lg text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>123 Health Street, Medical District, NY 10001</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">We Accept</h3>
            <div className="flex flex-wrap gap-3">
              <div className="bg-muted px-4 py-2 rounded text-muted-foreground font-medium">
                Visa
              </div>
              <div className="bg-muted px-4 py-2 rounded text-muted-foreground font-medium">
                Mastercard
              </div>
              <div className="bg-muted px-4 py-2 rounded text-muted-foreground font-medium">
                PayPal
              </div>
            </div>
            <div className="pt-4">
              <p className="text-lg font-medium text-foreground">100% Secure Payments</p>
              <p className="text-muted-foreground">Your data is protected</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-lg text-muted-foreground">
            © 2024 MediCare Express. All rights reserved. Licensed Pharmacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
