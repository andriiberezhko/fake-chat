import React from "react";
import { MessageArea } from "../MessageArea/MessageArea";
import { MessageForm } from "../MessageForm/MessageForm";
import { TitleMessageList } from "../TitleMessageList/TitleMessageList";
import style from "./MessagesList.module.scss";

export const MessagesList = () => {
  return (
    <div className={style.MessagesList}>
      Title (avatar + name) messages area sendMessageForm
      <TitleMessageList />
      <MessageArea />
      <MessageForm />
    </div>
  );
};
