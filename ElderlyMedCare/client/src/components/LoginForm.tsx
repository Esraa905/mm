import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, LogIn, Pill } from "lucide-react";
import { useState } from "react";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onRegisterClick: () => void;
  onForgotPassword: () => void;
}

export default function LoginForm({
  onLogin,
  onRegisterClick,
  onForgotPassword,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-primary rounded-xl flex items-center justify-center">
            <Pill className="w-9 h-9 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-3xl">Welcome Back</CardTitle>
            <CardDescription className="text-lg mt-2">
              Sign in to your MediCare Express account
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-lg font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-16 text-xl"
                data-testid="input-email"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-lg font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-16 text-xl pr-14"
                  data-testid="input-password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12"
                  onClick={() => setShowPassword(!showPassword)}
                  data-testid="button-toggle-password"
                >
                  {showPassword ? (
                    <EyeOff className="w-6 h-6" />
                  ) : (
                    <Eye className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="w-6 h-6"
                  data-testid="checkbox-remember"
                />
                <Label htmlFor="remember" className="text-lg cursor-pointer">
                  Remember me
                </Label>
              </div>
              <button
                type="button"
                className="text-lg text-primary hover:underline"
                onClick={onForgotPassword}
                data-testid="button-forgot-password"
              >
                Forgot Password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full h-16 text-xl font-semibold"
              disabled={!email || !password}
              data-testid="button-login"
            >
              <LogIn className="w-6 h-6 mr-2" />
              Sign In
            </Button>

            <div className="text-center pt-4">
              <p className="text-lg text-muted-foreground">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-lg text-primary font-semibold hover:underline"
                  onClick={onRegisterClick}
                  data-testid="button-register"
                >
                  Create Account
                </button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
