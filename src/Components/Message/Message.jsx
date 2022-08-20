import React from "react";
import style from "./Message.module.scss";

export const Message = ({ avatarUrl, text, time, isMe }) => {
  return (
    <div className={!isMe ? style.message : style.message_isme}>
      <img
        src={avatarUrl}
        alt=""
        className={!isMe ? style.message_avatar : style.message_avatar_isme}
      />

      <div
        className={
          !isMe ? style.message_container : style.message_container_isme
        }
      >
        <div className={!isMe ? style.message_babel : style.message_babel_isme}>
          <p className={!isMe ? style.message_text : style.message_text_isme}>
            {text}
          </p>
        </div>
        <span className={!isMe ? style.message_date : style.message_date_isme}>
          {time}
        </span>
      </div>
    </div>
  );
};
