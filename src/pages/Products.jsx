import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { fetchCartData } from "../redux/cart/actions";
import { fetchProducts } from "../redux/product/actions";
import styles from "../styles/products.module.css";
import { addProductToCart } from "../utils/utils";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [sort, setSort] = useState(searchParams.get("_sort") || "");

  const [filter, setFilter] = useState(searchParams.get("gender") || "");

  const [page, setPage] = useState(Number(searchParams.get("_page")) || 1);

  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((store) => store.product);

  const resetAll = () => {
    setSort("");
    setFilter("");
  };

  useEffect(() => {
    const params = { _page: page, _sort: sort, category: filter };

    for (let key in params) {
      if (!params[key] || params[key] === 1) {
        delete params[key];
      }
    }
    dispatch(fetchProducts(params));
    dispatch(fetchCartData());
    setSearchParams(params);
  }, [dispatch, filter, page, setSearchParams, sort]);

  const handleCart = (el) => {
    addProductToCart(el).then((res) => {
      dispatch(fetchCartData());
    });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className={styles.filterSortBox}>
        <select
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          value={sort}
        >
          <option value="">Sort By</option>
          <option value="id">Sort By Id</option>
          <option value="price">Sort by Price</option>
          <option value="rating.rate">Sort by Rating</option>
        </select>
        <select
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
          value={filter}
        >
          <option value="">Filter by</option>
          <option value="bags">Filter by Bags</option>
          <option value="men's clothing">Filter by Men's clothing</option>
          <option value="women's clothing">Filter by Women's clothing</option>
          <option value="jewelery">Filter by Jewelery</option>
          <option value="electronics">Filter by Electronics</option>
        </select>
        <button
          onClick={() => {
            resetAll();
          }}
        >
          Reset All
        </button>
      </div>
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
      <div className={styles.paginationsButton}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button disabled={data.length < 10} onClick={() => setPage(page + 1)}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Products;
