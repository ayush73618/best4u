import React, { useState } from "react";
import classes from "./login.module.css";
import Modal from "../utilities/Modal";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { loginActions } from "../Store/login";
import loginImage from "../../Assets/loginImage.png";
import { login } from "../Store/login-signup-url";

const Login = () => {
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,})$/;

  const emailIsValid = emailRegex.test(enteredEmail) && isEmailTouched;
  const passwordIsValid = enteredPassword.length >= 6 && isPasswordTouched;

  const emailHasError = !emailRegex.test(enteredEmail) && isEmailTouched;
  const passwordHasError = enteredPassword.length < 6 && isPasswordTouched;

  let formIsValid = emailIsValid && passwordIsValid;
  if (enteredEmail.includes("@") && enteredPassword.length >= 6) {
    formIsValid = true;
  }

  const emailBlurHandler = () => {
    setIsEmailTouched(true);
  };

  const passwordBlurHandler = () => {
    setIsPasswordTouched(true);
  };

  const onClose = () => {
    dispatch(loginActions.removeLoginModal());
  };

  const showSignUpModal = () => {
    dispatch(loginActions.showSignUp());
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const showPasswordHandler = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const onSubmit = (event) => {
    // fetch('https:localhost:8080/users').then((data)=>{
    //   console.log(data);
    // })
    event.preventDefault();
    dispatch(login(enteredEmail, enteredPassword));
  };
  return (
    <Modal onClose={onClose}>
      <button
        className={classes["close-button"]}
        onClick={onClose}
        title="close"
      >
        <i className="fa-solid fa-x"></i>
      </button>
      <div className={classes.login}>
        <img src={loginImage} alt="img" className={classes.image} />
        <h3>Welcome Back</h3>
        <form>
          <Input
            label="Enter Email"
            value={enteredEmail}
            type="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            hasError={emailHasError}
          />

          <Input
            label="Enter Password"
            type={passwordType}
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            hasError={passwordHasError}
          />
          <div>
            <input type="checkbox" onClick={showPasswordHandler} />
            Show Password
          </div>

          <div className={classes.button}>
            <button
              className={classes.loginbutton}
              disabled={formIsValid ? "" : "disabled"}
              onClick={onSubmit}
            >
              Login
            </button>
          </div>

          <h4 className={classes.h4}>
            New Here? First
            <button
              onClick={showSignUpModal}
              className={classes["create-account-btn"]}
            >
              Create Your Account
            </button>{" "}
            Here
          </h4>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
