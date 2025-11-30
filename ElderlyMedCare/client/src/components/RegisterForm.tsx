import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, UserPlus, Pill } from "lucide-react";
import { useState } from "react";

interface RegisterFormProps {
  onRegister: (data: RegisterData) => void;
  onLoginClick: () => void;
}

interface RegisterData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export default function RegisterForm({
  onRegister,
  onLoginClick,
}: RegisterFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister({ fullName, email, phone, password });
  };

  const isFormValid = fullName && email && phone.length >= 10 && password.length >= 6 && acceptTerms;

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-primary rounded-xl flex items-center justify-center">
            <Pill className="w-9 h-9 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-3xl">Create Account</CardTitle>
            <CardDescription className="text-lg mt-2">
              Join MediCare Express for easy medicine orders
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-3">
              <Label htmlFor="fullName" className="text-lg font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="h-14 text-xl"
                data-testid="input-fullname"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="regEmail" className="text-lg font-medium">
                Email Address
              </Label>
              <Input
                id="regEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-14 text-xl"
                data-testid="input-reg-email"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="regPhone" className="text-lg font-medium">
                Phone Number
              </Label>
              <Input
                id="regPhone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
                className="h-14 text-xl"
                data-testid="input-reg-phone"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="regPassword" className="text-lg font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="regPassword"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password (min 6 chars)"
                  className="h-14 text-xl pr-14"
                  data-testid="input-reg-password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10"
                  onClick={() => setShowPassword(!showPassword)}
                  data-testid="button-toggle-reg-password"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                className="w-6 h-6 mt-1"
                data-testid="checkbox-terms"
              />
              <Label htmlFor="terms" className="text-base leading-relaxed cursor-pointer">
                I agree to the Terms of Service and Privacy Policy
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full h-14 text-xl font-semibold"
              disabled={!isFormValid}
              data-testid="button-create-account"
            >
              <UserPlus className="w-6 h-6 mr-2" />
              Create Account
            </Button>

            <div className="text-center pt-2">
              <p className="text-lg text-muted-foreground">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-lg text-primary font-semibold hover:underline"
                  onClick={onLoginClick}
                  data-testid="button-goto-login"
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
