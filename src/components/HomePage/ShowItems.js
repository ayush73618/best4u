import React from 'react'
import classes from './ShowItems.module.css'

const ShowItems = (props) => {
  return (
    <a href='/' className={classes.show}>
      <div className={classes.box}><img src={props.img} alt=""   className={classes.image}/></div>
      <h3>{props.types}</h3>
      <h4>{props.tagline}</h4>
      {/* <button>Shop Now</button> */}
      
    </a>
  )
}

export default ShowItems
