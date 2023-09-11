import React from 'react'
import classes from './ShowItem.module.css';
import ShowItems from './ShowItems';
const ShowItem = (props) => {
  return (
    
    <div className={`${classes['show-menu']}`  }>
     <div>
        <h2 style={{'marginLeft':'1rem',
      'textAlign':'center'}}>
          {props.type}
        </h2>
        
     </div>
       <ShowItems img={props.pictureArray[0]} tagline="Starting from 6999" types="Mobile" />
       <ShowItems img={props.pictureArray[1]} tagline="Starting from 9999" types="Camera"  />
       <ShowItems img={props.pictureArray[2]} tagline="Starting from 499" types="Earphones" />
       <ShowItems img={props.pictureArray[3]} tagline="Starting from 34999" types='Laptop'  />
       <ShowItems img={props.pictureArray[4]} tagline="Starting from 2999" types="Watches"  />


    </div>
  
  )
}

export default ShowItem


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
