import React from "react";
import { format } from "date-fns";
import style from "./Message.module.scss";

export const Message = ({ avatarUrl, text, time, isme }) => {
  const formatTime = format(new Date(time), "MM/dd/yy, p");
  return (
    <div className={!isme ? style.message : style.message_isme}>
      <img
        src={avatarUrl}
        alt=""
        className={!isme ? style.message_avatar : style.message_avatar_isme}
      />

      <div
        className={
          !isme ? style.message_container : style.message_container_isme
        }
      >
        <div className={!isme ? style.message_babel : style.message_babel_isme}>
          <p className={!isme ? style.message_text : style.message_text_isme}>
            {text}
          </p>
        </div>
        <span className={!isme ? style.message_date : style.message_date_isme}>
          {formatTime}
        </span>
      </div>
    </div>
  );
};
