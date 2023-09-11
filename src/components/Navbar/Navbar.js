import React from 'react'
import classes from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../Store/login';

const Navbar = () => {
 const isLoggedIn =useSelector(state=>state.loginReducer.isLoggedIn);

 
  const dispatch = useDispatch();
  const showLoginModal=()=>{
    dispatch(loginActions.showLogin())
  }

  const logout = ()=>{
    dispatch(loginActions.logout());
  }
  
   return (
    <nav className={classes.nav}>
        <a href='/'><img src="Assets/logo.png" alt='logo' className={classes.logo}/></a>
        <ul className={classes.navLink}>
            <li><a href='/'>Home</a></li>
            {isLoggedIn && <li className={classes.dropdown}>My Profile <i className="fa-solid fa-angle-down"></i>
               <ul className={classes['dropdown-list']}>
                <li>About me</li>
                <li>My Orders</li>
                <li>Edit Account</li>
               </ul>


              </li>}
           {!isLoggedIn &&<li><a href='##' onClick={showLoginModal}>Login/Signup</a></li>}
           {isLoggedIn && <li><a href="##" onClick={logout}>Log out</a></li>}
            <li><a href='##'>Contact us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
