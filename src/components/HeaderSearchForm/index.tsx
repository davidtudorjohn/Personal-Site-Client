import React from "react";
import "./headersearchform.css";
interface Props {
  icon: any;
}
const HeaderSearchForm = (props: Props) => {
  return (
    <form id="header-search-form">
      <input type="text" id="header-search-input" />
      <button id="header-search-btn">{props.icon}</button>
    </form>
  );
};
export default HeaderSearchForm;
