import React, { useEffect, useState } from 'react'
import classes from './HomePage.module.css'
import ShowItem from './ShowItem'

const HomePage = () => {

  const displayPic = ['Assets/pic-1.jpg','Assets/camera/pic-2.jpg','Assets/Clothing/pic-3.jpg']
  const [changeDisplayPic,setChangeDisplayPic] = useState(displayPic[0]);
  
  // useEffect(()=>{
  //  const interval =  setTimeout(() => {
  //     const num =  Math.ceil(Math.random()*2);
  //     console.log(num);
  //     setChangeDisplayPic(displayPic[num]);
  //   }, 2000);

  //   return ()=>{
  //    clearInterval(interval);
  //   }
    
  // })

  const pictureArray = [['Assets/camera/cam-display-1.jpg','Assets/camera/pic-1.jpg',
  'Assets/camera/pic-2.jpg','Assets/camera/pic-3.jpg','Assets/camera/pic-4.jpg'],
  ['Assets/Clothing/pic-1.jpg','Assets/Clothing/pic-2.webp',
  'Assets/Clothing/pic-3.jpg','Assets/Clothing/pic-4.jpg','Assets/Clothing/pic-5.webp'],
  ['Assets/Groceries/pic-1.jpg','Assets/Groceries/pic-2.jpg',
  'Assets/Groceries/pic-3.jpg','Assets/Groceries/pic-4.jpg','Assets/Groceries/pic-5.jpeg']
]



  return (
    <>
    <div className='container'>

      <img src={changeDisplayPic} alt="homeImage" className={classes['home-page']}/>
      
    </div>
    <ShowItem type="Electronics" pictureArray={pictureArray[0]}/>
    <ShowItem type="Clothing" pictureArray={pictureArray[1]}/>
    <ShowItem type="HouseHold" pictureArray={pictureArray[2]}/>
    </>
  )
}

export default HomePage
