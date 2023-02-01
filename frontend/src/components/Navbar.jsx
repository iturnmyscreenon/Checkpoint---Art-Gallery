import React from "react";
import { Link } from "react-router-dom";
import logoskonbarb from "../assets/logoskonbarb.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navleft">
        <img src={logoskonbarb} alt="skonbarb" />{" "}
      </div>
      <div className="navright">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/gallery"> Gallery </Link>{" "}
      </div>
    </div>
  );
}
