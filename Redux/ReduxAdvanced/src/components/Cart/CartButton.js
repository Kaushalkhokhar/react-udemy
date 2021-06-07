import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/index'

const CartButton = (props) => {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch();

  let totalItem = 0;
  for (const item in cartItems) {
    totalItem += cartItems[item].amount
  }

  const showCartHandler = () => {
    dispatch(uiActions.toggle())
  }


  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
