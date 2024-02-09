import React from "react";
import classes from "./ShowItems.module.css";
import { Link } from "react-router-dom";

const ShowItems = (props) => {
  return (
    <Link to="/products/1" className={classes.show}>
      <div className={classes.box}>
        <img src={props.img} alt="" className={classes.image} />
      </div>
      <h3>{props.types}</h3>
      <h4>{props.tagline}</h4>
      {/* <button>Shop Now</button> */}
    </Link>
  );
};

export default ShowItems;
