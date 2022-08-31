import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { deleteFromCart, fetchCartData } from "../redux/cart/actions";
import styles from "../styles/cart.module.css";

const Cart = () => {
  const { cart, isLoading } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const DeleteProduct = (el) => {
    dispatch(deleteFromCart(el.id));
  };
  useEffect(()=>{
    dispatch(fetchCartData());
  },[])
  if (isLoading) {
    return <Loader />;
  }
  if (cart.length === 0) {
    return <div className={styles.emptyCart}>Cart is Empty</div>;
  }
  return (
    <div>
      <div className={styles.cartContainer}>
        {cart.map((el) => (
          <Product
            key={el.id}
            {...el}
            label={"REMOVE FROM CART"}
            onclick={DeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
