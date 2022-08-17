import React from "react";
import { MessagesList } from "../MessagesList/MessagesList";
import { TitleChat } from "../TitleChat/TitleChat";
import { ChatsList } from "../ChatsList/ChatsList";
import style from "./Container.module.scss";

export const Container = () => {
  return (
    <div className={style.Container}>
      <div className={style.wrapper}>
        <TitleChat />
        <ChatsList />
      </div>
      <MessagesList />
    </div>
  );
};
