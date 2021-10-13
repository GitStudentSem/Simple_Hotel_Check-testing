import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../elements/Button";
import Input from "../elements/Input";
import s from "./LoginPage.module.css";

const LoginPage = (props) => {
  return (
    <div className={s.login}>
      <div className={s.filter}>
        <form className={s.form}>
          <h1 className={s.title}>Simple Hotel Check</h1>
          <Input label="Логин" type="text" />
          <Input label="Пароль" type="password" />
          <NavLink to="/main">
            <Button text="Войти" />
          </NavLink>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
