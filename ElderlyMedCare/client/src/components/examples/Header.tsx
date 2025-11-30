import Header from "../Header";

export default function HeaderExample() {
  return (
    <Header
      cartItemCount={3}
      isLoggedIn={false}
      onLoginClick={() => console.log("Login clicked")}
      onCartClick={() => console.log("Cart clicked")}
    />
  );
}
