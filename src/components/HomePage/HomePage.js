import React from "react";
import classes from "./HomePage.module.css";
import ShowItem from "./ShowItem";

const HomePage = () => {
  //   const displayPic = [
  //     "Assets/pic-1.jpg",
  //     "Assets/camera/pic-2.jpg",
  //     "Assets/Clothing/pic-3.jpg",
  //   ];
  // const [changeDisplayPic, setChangeDisplayPic] = useState(displayPic[0]);

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

  // const onChangeDisplayPic = () => {
  //   setChangeDisplayPic(displayPic[2]);
  // };

  const pictureArray = [
    [
      "Assets/camera/cam-display-1.jpg",
      "Assets/camera/pic-1.jpg",
      "Assets/camera/pic-2.jpg",
      "Assets/camera/pic-3.jpg",
      "Assets/camera/pic-4.jpg",
    ],
    [
      "Assets/Clothing/pic-1.jpg",
      "Assets/Clothing/pic-2.webp",
      "Assets/Clothing/pic-3.jpg",
      "Assets/Clothing/pic-4.jpg",
      "Assets/Clothing/pic-5.webp",
    ],
    [
      "Assets/Groceries/pic-1.jpg",
      "Assets/Groceries/pic-2.jpg",
      "Assets/Groceries/pic-3.jpg",
      "Assets/Groceries/pic-4.jpg",
      "Assets/Groceries/pic-5.jpeg",
    ],
  ];

  return (
    <>
      <div className="container">
        <img
          src="Assets/pic-1.jpg"
          alt="homeImage"
          className={classes["home-page"]}
        />

        <div className={classes["display-home"]}>
          <ShowItem type="Electronics" pictureArray={pictureArray[0]} />
          <ShowItem type="Clothing" pictureArray={pictureArray[1]} />
          <div className={classes["show-menu-boxes"]}>
            <h3>Best Mobiles Phone At Lower Prices</h3>
            <div className={classes.showBox}>
              <img src="Assets/mobiles/Iphone-1.jpg" alt="Iphone" />
            </div>
          </div>
          <a href="##" className={classes.ad} title="bank offers">
            <img src="Assets/ad/credit-card-ad.jpg" alt="ad" />
            <p>
              Get 5% unlimited Cashback on Every purchase with kotak Credit
              Cards
            </p>
          </a>
          <ShowItem type="Groceries" pictureArray={pictureArray[2]} />
          <ShowItem type="Electronics" pictureArray={pictureArray[0]} />
          <ShowItem type="Clothing" pictureArray={pictureArray[1]} />
          <ShowItem type="HouseHold" pictureArray={pictureArray[2]} />
        </div>
      </div>
      <div className={classes["deal-of-the-day"]}>
        <img src="Assets/mobiles/Iphone-1.jpg" alt="alternate" />
        <div className={classes.description}>
          <p>Deal Of The Day------------------------</p>
          <p>
            All New Iphone 15 Pro Max , Better than Ever , A17 Bionic Chip ,
            24MP Back+Rear
          </p>
          <span className={classes.discount}>15% off</span>
          <p className={classes.price}>
            &#8377;50,999
            <sup>
              <del>&#8377;59,999</del>
            </sup>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
