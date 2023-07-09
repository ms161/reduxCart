import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Cart = (props) => {
  const qty=useSelector(state=>state.cart.qty)
  const show=useSelector(state=>state.cart.show)

  return (
    <>
   {show&& <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {qty>0&&  <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
          />
      </ul>
}

    </Card>}
          </>
  );
};

export default Cart;
