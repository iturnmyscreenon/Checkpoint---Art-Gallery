import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ArtCard from "../components/Artcard";
import "../styles/ArtDetail.css";

export default function Artdetail() {
  const { id } = useParams();
  const [art, setArt] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/art/${id}`)
      .then((response) => {
        setArt(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <Card>
      <div className="artsize">
        <h1>Painting</h1>
        <ArtCard art={art} full />
      </div>
    </Card>
  );
}
