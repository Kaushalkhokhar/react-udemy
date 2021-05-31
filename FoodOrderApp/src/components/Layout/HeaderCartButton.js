import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [addBump, setAddBump] = useState(false);

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0)
  
  const { items } = cartCtx
  const btnClasses = `${classes.button} ${addBump && classes.bump}`;

  useEffect(() =>{
    if(items.length === 0) {
      return;
    }
    setAddBump(true)
    const timer = setTimeout(() => {
      setAddBump(false)
    }, 300)

    // Without this bump runs on every click
    // with this bump runs only if gap between 
    // every click is 300ms 
    return () => {
      clearTimeout(timer)
    }
  }, 
  [items])  


  // HeaderCartButton is reevaluated whenever the context changes
  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
