import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    let updatedItems;

    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const exisitingCartItem = state.items[exisitingCartItemIndex];

    if (exisitingCartItem) {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    // console.log(action.id);
    const removableItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    let updatedItems;
    const removableItem = state.items[removableItemIndex];
    const updatedTotalAmount = state.totalAmount - removableItem.price;

    if (removableItem.amount > 1) {
      const updatedItem = {
        ...removableItem,
        amount: removableItem.amount--,
      };

      updatedItems = [...state.items];

      updatedItem[removableItemIndex] = updatedItem;
    } else if (removableItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.amount !== 1);
    }
    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // console.log("Add Item");
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
