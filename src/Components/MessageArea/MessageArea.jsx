import React, { useEffect } from "react";

import style from "./MessageArea.module.scss";
import { Message } from "../Message/Message";

export const MessageArea = ({ avatar, message }) => {
  const messagesEndRef = React.createRef();
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });
  return (
    <div className={style.messageArea}>
      {message && message.lenght !== 0 ? (
        <ul>
          {message.map((item) => {
            return (
              <li key={item.id}>
                <Message
                  avatarUrl={avatar}
                  text={item.text}
                  time={item.time}
                  isme={item.isme}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={style.empty}>Chose contact to start chat</p>
      )}
      <div style={{ float: "left", clear: "both" }} ref={messagesEndRef}></div>
    </div>
  );
};
