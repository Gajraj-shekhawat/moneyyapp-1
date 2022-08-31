import React from "react";
import styles from "../styles/product.module.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = (el) => {
  const n = Math.round(el.rating.rate);

  const arr = new Array(n).fill(0);
  const newArr = new Array(5 - n).fill(0);

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
      <div className={styles.priceBox}>
        <b>₹{el.price}</b>
      </div>
      <div className={styles.ratingBox}>
        <div>
          {arr.map((el, i) => (
            <span className={styles.emptyStar} key={i}>
              &#9734;
            </span>
          ))}
          {newArr.map((el, i) => (
            <span key={i}>&#9734;</span>
          ))}
          <span className={styles.emptyStar}>({el.rating.count})</span>
        </div>
      </div>
      <div className={styles.cartButton}>
        <button
          onClick={() => {
            el.onclick(el);
          }}
        >
          {el.label}
        </button>
      </div>
      <div></div>
      <ToastContainer />
    </div>
  );
};

export default Product;
