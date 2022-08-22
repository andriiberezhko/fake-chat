import React from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../service/filterSlice";
import style from "./SearchField.module.scss";

export const SearchField = () => {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        name="filter"
        placeholder="Search or start new chat"
        onChange={(event) => dispatch(filterContacts(event.target.value))}
        className={style.search}
      ></input>
    </>
  );
};
