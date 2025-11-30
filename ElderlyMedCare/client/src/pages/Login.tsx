import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onRegister: (data: any) => void;
}

export default function LoginPage({ onLogin, onRegister }: LoginPageProps) {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-6">
      {showRegister ? (
        <RegisterForm
          onRegister={onRegister}
          onLoginClick={() => setShowRegister(false)}
        />
      ) : (
        <LoginForm
          onLogin={onLogin}
          onRegisterClick={() => setShowRegister(true)}
          onForgotPassword={() => console.log("Forgot password")}
        />
      )}
    </div>
  );
}
