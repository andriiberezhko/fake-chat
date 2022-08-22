import React from "react";
import style from "./TitleMessageList.module.scss";

export const TitleMessageList = ({ avatar, name }) => {
  return (
    <div className={style.title}>
      {avatar && name ? (
        <>
          <img src={avatar} alt="avatar" className={style.avatar} />
          <h3 className={style.name}>{name}</h3>
        </>
      ) : (
        <div className={style.empty}></div>
      )}
    </div>
  );
};
