import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../ReduxStore/Cart';

const CartButton = (props) => {
  const qty=useSelector(state=>state.cart.qty)
const dispatch=useDispatch()
  const btnHandler=e=>{
    console.log('cart btn clicked')
dispatch(cartActions.show())

  }

  return (
    <button className={classes.button}>
      <span onClick={btnHandler}>My Cart</span>
      <span className={classes.badge}>{qty}</span>
    </button>
  );
};

export default CartButton;
