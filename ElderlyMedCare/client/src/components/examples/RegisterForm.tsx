import RegisterForm from "../RegisterForm";

export default function RegisterFormExample() {
  return (
    <div className="p-6 bg-background">
      <RegisterForm
        onRegister={(data) => console.log("Register:", data)}
        onLoginClick={() => console.log("Login clicked")}
      />
    </div>
  );
}
