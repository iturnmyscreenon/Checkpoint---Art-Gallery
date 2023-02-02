import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Card from "react-bootstrap/Card";
import SampleCard from "../helpers/sampleCard";
import "../styles/ArtCard.css";

export default function Artcard({ art, full }) {
  const [parent] = useAutoAnimate();
  return (
    <Card ref={parent} className="artcard" style={{ maxWidth: "300px" }}>
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
          {full ? art.description : `${art.description?.substring(0, 99)}...`}
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
  full: false,
};

Artcard.propTypes = {
  art: SampleCard,
  full: PropTypes.bool,
};
