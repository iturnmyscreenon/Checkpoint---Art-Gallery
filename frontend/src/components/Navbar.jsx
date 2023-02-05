import React, { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BiUserCircle } from "react-icons/bi";
import ReorderIcon from "@mui/icons-material/Reorder";
import logoskonbarb from "../assets/logoskonbarb.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [parent] = useAutoAnimate();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div ref={parent} className="navbar">
      <div className="navleft" id={showLinks ? "open" : "close"}>
        <img src={logoskonbarb} alt="skonbarb" className="logo" />

        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/gallery"> Gallery </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/inscription">
            <BiUserCircle className="personIcon" />
          </Link>
        </div>
      </div>
      <div ref={parent} className="navright">
        <Link to="/"> Home </Link>
        <Link to="/gallery"> Gallery </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link className="sukabenoitpidor" to="/inscription">
          <BiUserCircle className="personIcon2" />
        </Link>

        <button className="navbtn" type="button" onClick={toggleLinks}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
