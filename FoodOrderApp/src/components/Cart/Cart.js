import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addItemToCartHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const removeItemFromCartHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addItemToCartHandler.bind(null, item)}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul> 
  );

  const hasItem = cartItems.length > 0;

  return (
    <Modal onHide={props.onHide}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Cancel
        </button>
        {hasItem && <button className={classes.button} onClick={props.onOrder}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
