import React from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddMessageMutation } from "../../service/serviceApi";
import { ResponseMessage } from "../../service/responseMessage";

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
    <form onSubmit={onHandleSubmit}>
      <label>
        <input
          type="text"
          name="message"
          value={text}
          placeholder="Type your message"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={changeInput}
        />
      </label>
      <button type="submit">send message</button>
    </form>
  );
};
