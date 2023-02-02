import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import SampleCard from "../helpers/sampleCard";
import "../styles/ArtCard.css";

export default function Artcard({ art }) {
  return (
    <Card className="artcard" style={{ width: "18rem" }}>
      <Link to={`/gallery/artcard/${art.id}`}>
        <Card.Img src={art.image} alt="painting" />
      </Link>
      <Card.Body className="artcardInfo d-flex flex-column">
        <Card.Title
          style={{
            fontSize: "30px",
            fontStyle: "bold",
            fontFamily: "georgia, serif",
            color: "rgb(114, 71, 14)",
          }}
        >
          {art.name}
        </Card.Title>

        <Card.Text
          style={{ color: "grey", fontStyle: "italic", fontSize: "20px" }}
        >
          {art.description.substring(0, 99)}...
        </Card.Text>
        <Card.Text style={{ fontStyle: "italic", color: "#6c757d" }}>
          {art.price}$
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Artcard.defaultProps = {
  art: { id: 0, image: "", name: "", description: "", price: 0 },
};

Artcard.propTypes = {
  art: SampleCard,
};
