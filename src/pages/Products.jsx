import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Product from "../components/Product";
import { fetchProducts } from "../redux/product/actions";
import styles from '../styles/products.module.css'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { data, isError, isLoading } = useSelector((store) => store.product);
  // console.log('isLoading:', isLoading)
  // console.log('isError:', isError)
  // console.log("data:", data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div >
     <div className={styles.productContainer}>
     {data.map((el) => (
        <Product key={el.id} {...el} />
      ))}
     </div>
    </div>
  );
};

export default Products;
