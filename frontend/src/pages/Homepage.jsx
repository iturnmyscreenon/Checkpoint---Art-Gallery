import React from "react";
import { Link } from "react-router-dom";
import BackGround from "../assets/background.jpg";
import "../styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BackGround})` }}>
      <div className="headerContainer">
        <h1>Skonbarb Gallery</h1>
        <p>Art Travel</p>
        <Link to="/gallery">
          <button type="button">GO TO GALLERY</button>
        </Link>
      </div>
    </div>
  );
}
