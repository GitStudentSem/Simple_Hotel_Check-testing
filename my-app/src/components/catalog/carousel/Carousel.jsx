import React from "react";
import s from "./Carousel.module.css";
import image_1 from "./img/img_1.jpg";
import image_2 from "./img/img_2.jpg";
import image_3 from "./img/img_3.jpg";
import image_4 from "./img/img_4.jpg";

const Carousel = (props) => {
  return (
    <div className={s.slider}>
      <div className={s.photo}>
        <img src={image_1} alt="" />
      </div>
      <div className={s.photo}>
        <img src={image_2} alt="" />
      </div>
      <div className={s.photo}>
        <img src={image_3} alt="" />
      </div>
      <div className={s.photo}>
        <img src={image_4} alt="" />
      </div>
    </div>
  );
};
export default Carousel;
