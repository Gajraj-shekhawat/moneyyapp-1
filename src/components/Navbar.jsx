import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
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
          return isActive ? { background: "#b10606" } : null;
        }}
        to={"/cart"}
      >
        Cart
      </NavLink>
    </nav>
  );
};

export default Navbar;
