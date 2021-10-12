import React from "react";
import s from "./Header.module.css";
import log_out from "../../icons/log_out.svg";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <p className={s.header_name}>Simple Hotel Check</p>
      <NavLink to="/login" className={s.login_logout}>
        Выйти
        <img src={log_out} alt="Выйти из приложения" />
      </NavLink>
    </header>
  );
};
export default Header;
