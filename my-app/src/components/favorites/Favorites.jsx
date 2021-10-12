import React from "react";
import s from "./Favorites.module.css";
import Hotel from "./hotel/Hotel";
import arrow_top from "../../icons/arrow_top.svg";
import arrow_bottom from "../../icons/arrow_bottom.svg";

const Favorites = (props) => {
  return (
    <div className={s.favorites}>
      <h2 className={s.title}>Избранное</h2>
      <div className={s.button_wrapper}>
        <button className={s.rating_sort}>
          <span>Рейтинг</span>
          {/* Не данные для кнопок будут получаться из базы, они требуют серьезной переработки */}
          <div className={s.arrows}>
            <img src={arrow_top} alt="Сортировать по убыванию" />
            <img src={arrow_bottom} alt="Сортировать по возрастанию" />
          </div>
        </button>
        <button className={s.price_sort}>
          <span>Цена</span>
          {/* Не данные для кнопок будут получаться из базы, они требуют серьезной переработки */}
          <div className={s.arrows}>
            <img src={arrow_top} alt="Сортировать по убыванию" />
            <img src={arrow_bottom} alt="Сортировать по возрастанию" />
          </div>
        </button>
      </div>
      <Hotel />
      <Hotel />
      <Hotel />
    </div>
  );
};
export default Favorites;
