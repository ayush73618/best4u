import React from "react";
import Input from "./Input";
import classes from "./SignUp.module.css";
import Modal from "../utilities/Modal";
import { useDispatch } from "react-redux";
import { loginActions } from "../Store/login";
import loginImage from '../../Assets/loginImage.png'

const SignUp = () => {
    const dispatch = useDispatch();
    const onClose = ()=>{
        dispatch(loginActions.removeSignUp())
    }

    const showLoginModal=()=>{
      dispatch(loginActions.showLogin());
    }
  return (
    <Modal onClose={onClose}>
       <button className={classes['close-button']} onClick={onClose} title="close"><i className="fa-solid fa-x"></i></button>
    <div className={classes.signUp}>
    <img src={loginImage} alt="img" className={classes.image}/>
      <h3>Join Us</h3>
      <form>
        <Input label="First Name" type="text" />
        <Input label="Last Name" type="text" />
        <Input label="Mobile Number" type="number" />
        <Input label="Enter Your Email" type="email" />
        <Input label="Enter Your Password" type="password" />
        <div className={classes.button}>
        <button className={classes.signUpButton}>Sign Up</button>
        </div>

        <h4 className={classes.h4}>Already Have an Account <button className={classes['go-to-login-page']} onClick={showLoginModal}>Login</button> Here</h4>
       
      </form>
    </div>
    </Modal>
  );
};

export default SignUp;
