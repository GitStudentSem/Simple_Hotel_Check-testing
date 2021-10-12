import React from "react";
import s from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={s.search}>
      <label className={s.sign}>
        <span>Локация</span>
        <input type="text" />
        <span className={s.error_message}></span>
      </label>
      <label className={s.sign}>
        <span>Дата заселения</span>
        <input type="date" />
        <span className={s.error_message}></span>
      </label>
      <label className={s.sign}>
        <span className={s.error}>Количество дней</span>
        <input type="number" className={s.error} />
        <span className={s.error_message}>Описание ошибки будет тут</span>
      </label>
      <button className={s.button}>Войти</button>
    </div>
  );
};
export default Search;
