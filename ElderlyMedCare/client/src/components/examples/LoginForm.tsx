import LoginForm from "../LoginForm";

export default function LoginFormExample() {
  return (
    <div className="p-6 bg-background">
      <LoginForm
        onLogin={(email, password) => console.log("Login:", email, password)}
        onRegisterClick={() => console.log("Register clicked")}
        onForgotPassword={() => console.log("Forgot password clicked")}
      />
    </div>
  );
}
