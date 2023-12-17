import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../Store/login";
import CartButton from "../utilities/CartButton";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);
  const loggedUser = useSelector((state) => state.loginReducer.loggedUser);
  const [showHamLink, setShowHamLink] = useState(false);
  const [windowsDimension, setWindowsDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const showHamLinks = () => {
    setShowHamLink((prevState) => !prevState);
  };

  const dispatch = useDispatch();
  const showLoginModal = () => {
    setShowHamLink(false);
    dispatch(loginActions.showLogin());
  };

  const logout = () => {
    dispatch(loginActions.logout());
  };

  const detectSize = () => {
    setWindowsDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    if (windowsDimension.innerWidth < 850) {
      setShowHamLink(true);
    } else {
      setShowHamLink(false);
    }

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowsDimension]);

  return (
    <>
      <div
        className={!showHamLink ? "" : classes.backDrop}
        onClick={showHamLinks}
      ></div>
      <nav className={classes.nav}>
        <div className={classes["logo-div"]}>
          <a href="/">
            <h2 className={classes.logo}>Best4U</h2>
          </a>
        </div>
        <div className={classes["hamburger-menu"]} onClick={showHamLinks}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <ul
          className={!showHamLink ? `${classes.navLink}` : `${classes.hamLink}`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          {isLoggedIn && (
            <li className={classes.dropdown}>
              {loggedUser.firstName} <i className="fa-solid fa-angle-down"></i>
              <ul className={classes["dropdown-list"]}>
                <li>About MySelf</li>
                <li>My Orders</li>
                <li>Edit Account</li>
              </ul>
            </li>
          )}
          {isLoggedIn && (
            <li>
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
    </>
  );
};

export default Navbar;
