import React from "react";
import logoskonbarb from "../assets/logoskonbarb.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navleft">
        <img src={logoskonbarb} alt="skonbarb" />{" "}
      </div>
      <div className="navright"> </div>
    </div>
  );
}
