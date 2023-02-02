import React from "react";
import { Link } from "react-router-dom";
import SampleCard from "../helpers/sampleCard";
import "../styles/Artcard.css";

export default function Artcard({ art }) {
  return (
    <div className="artcard">
      <Link to={`/artcard/${art.id}`}>
        <img src={art.image} alt="painting" w />
      </Link>
      <div className="artcardInfo">
        <h3>{art.name}</h3>
        <p>{art.description}</p>
        <p>{art.price}</p>
      </div>
    </div>
  );
}

Artcard.defaultProps = {
  art: { id: 0, image: "", name: "", description: "", price: 0 },
};

Artcard.propTypes = {
  art: SampleCard,
};
