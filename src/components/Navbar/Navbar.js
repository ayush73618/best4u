import React from "react";
import classes from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../Store/login";
import CartButton from "../utilities/CartButton";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

  const dispatch = useDispatch();
  const showLoginModal = () => {
    dispatch(loginActions.showLogin());
  };

  const logout = () => {
    localStorage.removeItem("isActive");
    dispatch(loginActions.logout());
  };

  return (
    <nav className={classes.nav}>
      <div className={classes["logo-div"]}>
        <a href="/">
          <h2 className={classes.logo}>Best4U</h2>
        </a>
      </div>
      <ul className={classes.navLink}>
        <li>
          <a href="/">Home</a>
        </li>
        {isLoggedIn && (
          <li className={classes.dropdown}>
            My Profile <i className="fa-solid fa-angle-down"></i>
            <ul className={classes["dropdown-list"]}>
              <li>About me</li>
              <li>My Orders</li>
              <li>Edit Account</li>
            </ul>
          </li>
        )}
        {isLoggedIn && (
          <li>
            {" "}
            <CartButton />
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <a href="##" onClick={showLoginModal}>
              Login/Signup
            </a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="##" onClick={logout}>
              Log out
            </a>
          </li>
        )}
        <li>
          <a href="##">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
