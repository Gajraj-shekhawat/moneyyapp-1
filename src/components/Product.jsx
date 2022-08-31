import React from "react";
import styles from "../styles/product.module.css";

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Product = (el) => {


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
        <button onClick={()=>{el.onclick(el)}}>{el.label}</button>
      </div>
      <div>
      </div>
        <ToastContainer/>
    </div>
  );
};

export default Product;
