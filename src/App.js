import { useState } from "react";
import Cart from "./component/Cart/Cart";
import Headers from "./component/Layout/Headers";
import Meals from "./component/Meals/Meals";
import CartProvider from "./store/CartProvider.js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onConfirm={hideCartHandler} />}
      <Headers onClick={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
