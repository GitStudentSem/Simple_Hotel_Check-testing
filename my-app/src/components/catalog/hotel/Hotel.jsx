import React from "react";
import active_star from "../../../icons/active_star.svg";
import disabled_star from "../../../icons/disabled_star.svg";
import like from "../../../icons/like.svg";
import s from "./Hotel.module.css";
import hotel_img from "../../../icons/hotel_img.svg";

const Hotel = (props) => {
  return (
    <div className={s.hotel}>
      <div className={s.photo}>
        <img src={hotel_img} alt="Логотип отеля" />
      </div>
      <div className={s.info}>
        <div className={s.top_line}>
          <h3 className={s.name}>Moscow Marriott Grand Hotel</h3>
          <button className={s.like}>
            <img src={like} alt="Отель в избранном" />
          </button>
        </div>
        <div className={s.dates}>
          <span>28 June, 2020</span>
          <span className={s.dash}></span>
          <span>1</span>
        </div>
        <div className={s.bottom_line}>
          <div>
            <img src={active_star} alt="Звезда рейтинга" />
            <img src={active_star} alt="Звезда рейтинга" />
            <img src={active_star} alt="Звезда рейтинга" />
            <img src={disabled_star} alt="Звезда рейтинга" />
            <img src={disabled_star} alt="Звезда рейтинга" />
          </div>
          <div>
            <span className={s.text}>Price:</span>
            <span className={s.price}>23 924 ₽</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hotel;
