import React from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import s from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={s.search}>
      <Input label="Локация" type="text" />
      <Input label="Дата заселения" type="date" />
      <Input label="Количество дней" type="number" />
      <Button text="Найти отель"></Button>
    </div>
  );
};
export default Search;
