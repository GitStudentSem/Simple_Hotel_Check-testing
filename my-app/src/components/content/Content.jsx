import React from "react";
import Search from "../search/Search";
import s from "./Content.module.css";

const Content = (props) => {
  return (
    <section className={s.content}>
      <div>
        <Search />
        <div className="s.favorites">Карточка избранное</div>
      </div>

      <div className="s.catalog">Карточка каталог</div>
    </section>
  );
};
export default Content;
