import React from "react";
import "../css/header.css";

const Header = ({ getQuote }) => (
  <header>
    {/* TODO: add loading gif while quote is not loaded */}
    <div onClick={getQuote}>
      <span>random</span>
      <span className="material-icons">sync</span>
    </div>
  </header>
);

export default Header;
