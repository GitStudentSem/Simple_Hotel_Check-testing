import React from "react";
import Favorites from "../favorites/Favorites";
import Search from "../search/Search";
import s from "./Content.module.css";

const Content = (props) => {
  return (
    <section className={s.content}>
      <div>
        <Search />
        <Favorites />
      </div>

      <div className="s.catalog">Карточка каталог</div>
    </section>
  );
};
export default Content;
