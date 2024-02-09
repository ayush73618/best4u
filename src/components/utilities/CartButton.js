import React from 'react'
import CartIcon from './CartIcon'
import classes from './CartButton.module.css'

const CartButton = () => {
    const noOfItems = 9;
  return (
    <button className={classes.btnClasses}>
    <span className={classes.icon}>
      <CartIcon /><sup className={classes.totalCartItems}>{noOfItems}</sup>
      
    </span>
    <span>Cart</span></button>
  )
}

export default CartButton
