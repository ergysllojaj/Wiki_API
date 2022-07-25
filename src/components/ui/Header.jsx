import React from "react";
import logo from "./img/wikilogo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="wiki api" />
      <h1>Wiki Search API</h1>
    </header>
  );
}
