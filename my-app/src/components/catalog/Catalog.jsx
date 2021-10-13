import React from "react";
import s from "./Catalog.module.css";
import arrow_left from "../../icons/arrow_left.svg";
import Hotel from "./hotel/Hotel";
import Carousel from "./carousel/Carousel";

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
      <Carousel />
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
