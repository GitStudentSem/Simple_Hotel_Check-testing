import React from "react";
import Catalog from "../catalog/Catalog";
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
      <Catalog />
    </section>
  );
};
export default Content;
