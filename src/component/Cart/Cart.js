import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: 1,
          name: "sushi",
          price: 19.99,
        },
      ].map((item) => (
        <li style={{ listStyle: "none" }}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onConfirm}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$96.96</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onConfirm}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
