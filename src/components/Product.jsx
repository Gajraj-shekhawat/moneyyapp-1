import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/actions";
import styles from "../styles/product.module.css";

const Product = (el) => {
const dispatch =useDispatch()
  const handleCart=(el)=>{
  dispatch(addProductToCart(el))
  }
  return (
    <div className={styles.containerBox}>
      <div className={styles.imgBox}>
        <img src={el.image} alt="" />
      </div>
      <div className={styles.titleBox}>
        <b>{el.title}</b>
        <div>{el.category}</div>
      </div>
      <div className={styles.description}>
        <p>{el.description}</p>
      </div>
      <div>
        <b>₹{el.price}</b>
      </div>
      <div>
        <p>
          {el.rating.rate} {el.rating.count}
        </p>
      </div>
      <div className={styles.cartButton}>
        <button onClick={()=>{handleCart(el)}}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
