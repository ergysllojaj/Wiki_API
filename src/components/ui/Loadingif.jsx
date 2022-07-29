import React from "react";
import loadingif from "./img/256x256.gif";

export default function Loadingif() {
  return (
    <div className="loadingscreen">
      <img src={loadingif} alt="Loading" />
    </div>
  );
}
