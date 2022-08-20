import React from "react";

import style from "./MessageArea.module.scss";
import { Message } from "../Message/Message";
import { useSelector } from "react-redux";

export const MessageArea = () => {
  const message = useSelector((state) => state.filter.message);
  console.log(message);
  return (
    <div className={style.messageArea}>
      <Message
        avatarUrl="http://loremflickr.com/640/480"
        text="1.	Вигляд сторінки чату має бути максимально наближеним до наступної картинки"
        time="Thu Aug 18 2022 12:56:45"
      />
      <Message
        avatarUrl="http://loremflickr.com/640/480"
        text="HTML/SCSS бажано писати власні без використання UI бібліотек. "
        time="Thu Aug 18 2022 12:56:45"
        isMe={true}
      />
      {message.lenght !== 0 &&
        message.map((item) => {
          return (
            <li>
              <Message text={item} />
            </li>
          );
        })}
    </div>
  );
};
