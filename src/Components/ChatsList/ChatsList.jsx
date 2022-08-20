import React from "react";
import style from "./ChatsList.module.scss";
import { ChatsData } from "../../db/ChatsData";
import { useSelector } from "react-redux";

export const ChatsList = () => {
  const { filter } = useSelector((state) => state.filter);
  // console.log(useSelector((state) => state));
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = ChatsData.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };
  return (
    <>
      <h2>Chats</h2>
      <div className={style.ChatsList}>
        <ul>
          {filteredContacts().map((item) => {
            return (
              <li className={style.items} key={item.id}>
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
