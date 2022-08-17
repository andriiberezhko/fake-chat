import React from "react";

export const MessageForm = () => {
  return (
    <form>
      <label>
        <input
          type="text"
          name="message"
          //   value
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
      <button type="submit">send message</button>
    </form>
  );
};
