import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

  // Add to card logic
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + (action.item.amount * action.item.price);

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };

  // Remove from cart logic
  } else if (action.type === 'REMOVE') {
    
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount -  existingCartItem.price;
    let updatedItems;

    if (existingCartItem.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter(item => item.id !== action.id)
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return initialCart;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCart);

  const addItemToCartHandler = (item) => {
    cartDispatch({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    cartDispatch({
      type: "REMOVE",
      id: id,
    });
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
