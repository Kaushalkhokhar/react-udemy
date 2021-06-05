import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Order from "./components/Order/Order";
import CartProvider from "./store/CartProvider";
function App() {
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const showOrderFormHandler = () => {
    setShowOrderForm(true);
    setShowCart(false)
  };

  const hideOrderFormHandler = () => {
    setShowOrderForm(false);
  };

  return (
    <CartProvider>
      {showCart && (
        <Cart onHide={hideCartHandler} onOrder={showOrderFormHandler} />
      )}
      {showOrderForm && <Order onHide={hideOrderFormHandler} />}
      <Header onShow={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
