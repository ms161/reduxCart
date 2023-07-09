import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../ReduxStore/Cart";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const qty = useSelector((state) => state.cart.qty);
  const amount = useSelector((state) => state.cart.amount);
  console.log(amount, "this is amount");
  const dispatch = useDispatch();
  const incHandler = (e) => {
    console.log("add to cart");
    dispatch(cartActions.qty(1));
    dispatch(cartActions.amount(price));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={incHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
