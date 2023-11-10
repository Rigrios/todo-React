import React from "react";
import style from "./Input.module.css";
import {MdSend} from 'react-icons/md';
import { Field, reduxForm } from "redux-form";

function Input(props) {
  
  return (
    <form onSubmit={props.handleSubmit}  className={style.createInput}>
      <div className={style.inputBox}>
        <Field name="text" component={"textarea"} className={style.input} type="text" />
      </div>
      <div className={style.buttonBox}>
            <button type="submit" className={style.button}> <MdSend size={"30"} color="green" /></button>
      </div>
    </form>
  );
}

Input = reduxForm({
  form: 'todoText'
})(Input)

export default Input;

