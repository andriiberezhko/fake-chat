import React from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../service/filterSlice";

export const SearchField = () => {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        name="filter"
        placeholder="search contact"
        onChange={(event) => dispatch(filterContacts(event.target.value))}
      ></input>
    </>
  );
};
