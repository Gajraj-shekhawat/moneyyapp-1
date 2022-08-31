import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { deleteFromCart, fetchCartData } from "../redux/cart/actions";
import styles from "../styles/cart.module.css"

const Cart = () => {
  const { cart, isLoading } = useSelector((store) => store.cart);
  
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(fetchCartData())
  }, [dispatch]);

  const DeleteProduct=(el)=>{
dispatch(deleteFromCart(el.id))
  }

  if(isLoading){
    return <Loader/>
  }
  return (
    <div>
      <div className={styles.cartContainer}>
        {cart.map(el=>(
          <Product key ={el.id} {...el} label={"REMOVE FROM CART"} onclick={DeleteProduct}/>
        ))}
      </div>
    </div>
  )
}

export default Cart