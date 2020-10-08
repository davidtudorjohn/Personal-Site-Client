import React, { useState } from "react";
import "./headersearchform.css";
interface Props {
  icon: any;
  submit?: any;
}

const HeaderSearchForm = (props: Props) => {
  const [query, setQuery] = useState("");
  const handleQueryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const handleQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("search for " + query);
  };
  return (
    <form
      id="header-search-form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        handleQuery(e);
      }}
    >
      <input onChange={handleQueryInput} type="text" id="header-search-input" />
      <button type="submit" id="header-search-btn">
        {props.icon}
      </button>
    </form>
  );
};
export default HeaderSearchForm;
