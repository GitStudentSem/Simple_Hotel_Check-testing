import React from "react";
import s from "./Catalog.module.css";
import arrow_left from "../../icons/arrow_left.svg";
import image_1 from "./img/img_1.jpg";
import image_2 from "./img/img_2.jpg";
import image_3 from "./img/img_3.jpg";
import image_4 from "./img/img_4.jpg";
import Hotel from "./hotel/Hotel";

const Catalog = (props) => {
  return (
    <div className={s.catalog}>
      <div className={s.info}>
        <div className={s.breadcrumb}>
          <p className={s.hotel}>Отели</p>
          <img className={s.goto} src={arrow_left} alt="" />
          <p className={s.location}>Москва</p>
        </div>
        <p className={s.arrival_date}>07 июля 2020</p>
      </div>
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
      <p className={s.in_favorites}>
        Добавлено в Избранное: <span className={s.count}>3</span> отеля
      </p>
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
    </div>
  );
};
export default Catalog;
