import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { MessageArea } from "../MessageArea/MessageArea";

import { MessageForm } from "../MessageForm/MessageForm";
import { TitleMessageList } from "../TitleMessageList/TitleMessageList";

import style from "./MessagesList.module.scss";

export const MessagesList = () => {
  const { id } = useParams();
  // console.log(useParams());
  return (
    <div className={style.MessagesList}>
      {id ? (
        <Outlet />
      ) : (
        <>
          <TitleMessageList />
          <MessageArea />
        </>
      )}
      <MessageForm />
    </div>
  );
};
