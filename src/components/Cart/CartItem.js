import { useState } from 'react';
import classes from './CartItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../ReduxStore/Cart';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const priceRedux=useSelector(state=>state.cart.amount)
  
 console.log(priceRedux)
  const dispatch = useDispatch()
  const qty=useSelector(state=>state.cart.qty)
  console.log(qty)
  const incHandler=e=>{
   
    dispatch(cartActions.qty(1))
    // dispatch(cartActions.amount())
  }
  const decHandler=e=>{
    dispatch(cartActions.qty(-1))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${priceRedux}{' '}
          <span className={classes.itemprice}>(${priceRedux}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{qty}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decHandler}>-</button>
          <button onClick={incHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
