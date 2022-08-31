import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
  const { cart } = useSelector((store) => store.cart);
  return (
    <nav className={styles.links}>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { background: "#b10606" } : null;
        }}
        to={"/"}
      >
        Products
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive
            ? { background: "#b10606", position: "relative" }
            : { position: "relative" };
        }}
        to={"/cart"}
      >
        Cart
        <div className={styles.cartLength}>{cart.length}</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
