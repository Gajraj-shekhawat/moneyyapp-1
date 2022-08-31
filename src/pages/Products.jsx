import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { fetchProducts } from "../redux/product/actions";
import styles from "../styles/products.module.css";
import { addProductToCart } from "../utils/utils";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.product);
 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const handleCart = (el) => {
   addProductToCart(el)
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className={styles.productContainer}>
        {data.map((el) => (
          <Product
            key={el.id}
            {...el}
            label={"ADD TO CART"}
            onclick={handleCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
