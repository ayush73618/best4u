import React from "react";
import classes from "./ShowItem.module.css";
import ShowItems from "./ShowItems";
const ShowItem = (props) => {
  return (
    <div className={classes["show-menu-boxes"]}>
      <h4 style={{ textAlign: "center", marginTop: "0.5rem" }}>{props.type}</h4>
      <div className={`${classes["show-menu"]}`}>
        <ShowItems
          img={props.pictureArray[2]}
          tagline="Starting from 499"
          types="Earphones"
        />
        <ShowItems
          img={props.pictureArray[3]}
          tagline="Starting from 34999"
          types="Laptop"
        />
        <ShowItems
          img={props.pictureArray[4]}
          tagline="Starting from 2999"
          types="Watches"
        />
        <ShowItems
          img={props.pictureArray[4]}
          tagline="Starting from 2999"
          types="Watches"
        />
      </div>
    </div>
  );
};

export default ShowItem;

// style={{'display':'flex',
//      'height':'100%',
//      'flexDirection':'column',
//      'alignItems':'center',
//      'justifyContent':'center',
//      'borderRight':'1px solid #333',
//      'paddingRight':'1rem',
//      'backgroundColor':'purple',
//      'color':'#fff',
//      'borderRadius':'12px',
//      'marginLeft':'0',

//      }}
