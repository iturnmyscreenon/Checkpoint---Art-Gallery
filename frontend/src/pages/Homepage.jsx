import React from "react";
import { Link } from "react-router-dom";
import BackGround from "../assets/background.jpg";
import "../styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="home">
      <div
        className="headerContainer"
        style={{ backgroundImage: `url(${BackGround})`, height: "100%" }}
      >
        <h1>SKONBARB GALLERY</h1>
        <p>Art Travel</p>
        <Link to="/gallery">
          <button type="button">GO TO GALLERY</button>
        </Link>
      </div>
    </div>
  );
}
