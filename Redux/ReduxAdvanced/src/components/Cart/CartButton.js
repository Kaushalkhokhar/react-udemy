import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartItems = useSelector(state => state.items)
  let totalItem = 0;
  for (const item in cartItems) {
    totalItem += cartItems[item].amount
  }
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
