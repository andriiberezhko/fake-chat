import React from "react";
import style from "./ChatsList.module.scss";
import { ChatsData } from "../../db/ChatsData";

export const ChatsList = () => {
  return (
    <>
      <h2>Chats</h2>
      <div className={style.ChatsList}>
        <ul>
          {ChatsData.map((item) => {
            return (
              <li className={style.items}>
                <img
                  src={`${item.avatar}`}
                  alt={`${item.name}`}
                  width="40px"
                  height="40px"
                  className={style.itemImg}
                />
                <div className={style.itemData}>
                  <h3>{item.name}</h3>
                  <p>message text</p>
                </div>
                <p className={style.itemTime}>time</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
