import React from "react";
import avatar from "../../img/avatar1.jpg";
import { SearchField } from "../SearchField/SearchField";

import style from "./TitleChat.module.scss";

export const TitleChat = () => {
  return (
    <div className={style.TitleChat}>
      <img src={avatar} alt="avatr" width="20px" height="20px" />
      <p>Name</p>
      <SearchField />
    </div>
  );
};
