import React from "react";
import s from "./Input.module.css";

const Input = (props) => {
  return (
    <label className={s.sign}>
      <span className={s.label}>{props.label}</span>
      <input type={props.type} />
      <span className={s.error_message}></span>
    </label>
  );
};
export default Input;
