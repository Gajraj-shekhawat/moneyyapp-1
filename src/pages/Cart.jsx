import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchCartData } from "../redux/cart/actions";

const Cart = () => {
  const { cart, isError, isLoading } = useSelector((store) => store.cart);
  console.log('cart:', cart)
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(fetchCartData())
  }, []);
  return (
    <div>Cart</div>
  )
}

export default Cart