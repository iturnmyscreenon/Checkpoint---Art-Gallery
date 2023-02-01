import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import logoskonbarb from "../assets/logoskonbarb.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="navleft" id={showLinks ? "open" : "close"}>
        <img src={logoskonbarb} alt="skonbarb" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/gallery"> Gallery </Link>
        </div>
      </div>
      <div className="navright">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/gallery"> Gallery </Link>
        <button className="navbtn" type="button" onClick={toggleLinks}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
