import React from "react";
import Card from "react-bootstrap/Card";
import AboutBack from "../assets/aboutpicture.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBack})` }}
      />
      <Card
        style={{
          color: "grey",
          fontStyle: "italic",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        <div className="aboutBottom">
          <h1> ABOUT SKONBARB</h1>
          <p>
            "SKONBARB est un groupe diversifié de plusieurs entreprises
            dynamiques. Notre agence de développement propose des solutions
            innovantes pour les entreprises souhaitant évoluer dans un monde en
            constante transformation. Notre agence de voyage, quant à elle,
            offre des expériences de voyage uniques et personnalisées pour des
            vacances inoubliables. Et notre galerie d'art en ligne présente une
            sélection éclectique d'œuvres d'artistes talentueux du monde entier.
            Ensemble, nous visons à offrir des services de qualité supérieure
            pour nos clients."
          </p>
        </div>
      </Card>
    </div>
  );
}

export default About;
