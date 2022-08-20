import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../Redux/filterSlice";

export const MessageForm = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const changeInput = (event) => {
    setMessage(event.currentTarget.value);
  };
  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(message));
    reset();
  };
  const reset = () => {
    setMessage("");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type your message"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={changeInput}
        />
      </label>
      <button type="submit">send message</button>
    </form>
  );
};
