import React from "react";
import s from "./Header.module.css";
import log_out from "../../icons/log_out.svg";

const Header = (props) => {
  return (
    <header className={s.header}>
      <p className={s.header_name}>Simple Hotel Check</p>
      <button className={s.login_logout}>
        Выйти
        <img src={log_out} alt="Выйти из приложения" />
      </button>
    </header>
  );
};
export default Header;
