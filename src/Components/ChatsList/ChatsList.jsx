import React from "react";
import { useGetContactsQuery } from "../../service/serviceApi";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./ChatsList.module.scss";
import { format } from "date-fns";

import { useSelector } from "react-redux";

export const ChatsList = () => {
  const contacts = useGetContactsQuery().data;

  const { filter } = useSelector((state) => state.filter);
  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  const location = useLocation();
  let url = location.pathname !== "/dialog" ? "/dialog/" : "";

  const visCont = contacts && filteredContacts();
  // console.log(visCont);
  // const byField = (field) => {
  //   return (a, b) => (a[field] > b[field] ? 1 : -1);
  // };
  // visCont.sort(byField('message'))
  console.log(
    contacts &&
      visCont.sort(function (a, b) {
        const a1 = a.message.map((item) => item.time);
        console.log(a1);
        console.log(Math.min(...a1));

        return a - b;
      })
  );

  return (
    <>
      <h2>Chats</h2>
      <div className={style.ChatsList}>
        <ul>
          {contacts &&
            filteredContacts().map((item) => {
              // console.log(filteredContacts());
              const lastMessage = item.message[item.message.length - 1];
              // console.log(lastMessage);

              const time = lastMessage
                ? format(new Date(lastMessage?.time), "MMM dd ,yyyy")
                : "";

              const text = lastMessage
                ? lastMessage.text.substring(0, 25) + "..."
                : "no message yet";
              // console.log(text);
              return (
                <li key={item.id}>
                  <NavLink to={`${url}${item.id}`} className={style.items}>
                    <img
                      src={`${item.avatar}`}
                      alt={`${item.name}`}
                      width="40px"
                      height="40px"
                      className={style.itemImg}
                    />
                    <div className={style.itemData}>
                      <h3>{item.name}</h3>
                      <p> {text}</p>
                    </div>
                    <p className={style.itemTime}>{lastMessage ? time : ""}</p>
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
