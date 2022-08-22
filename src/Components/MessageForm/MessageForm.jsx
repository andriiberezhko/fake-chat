import React from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddMessageMutation } from "../../service/serviceApi";
import { ResponseMessage } from "../../service/responseMessage";

import style from "./MessageForm.module.scss";

export const MessageForm = () => {
  const [text, setText] = useState("");

  const { id } = useParams();

  const [addMessage] = useAddMessageMutation();

  const changeInput = (event) => {
    setText(event.currentTarget.value);
  };
  const onHandleSubmit = (event) => {
    const message = {
      text: text,
      time: new Date(),
      isme: true,
    };
    event.preventDefault();
    addMessage({ id, message });
    reset();
    setTimeout(() => {
      ResponseMessage().then((message) => addMessage({ id, message }));
    }, 5000);
  };

  const reset = () => {
    setText("");
  };

  return (
    <form onSubmit={onHandleSubmit} className={style.form}>
      <label>
        <input
          type="text"
          name="message"
          value={text}
          placeholder="Type your message"
          onChange={changeInput}
          className={style.input}
        />
      </label>
      <button type="submit" className={style.button}></button>
    </form>
  );
};
