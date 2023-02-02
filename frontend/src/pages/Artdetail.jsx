import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArtCard from "../components/Artcard";

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
    <div>
      <h1>Painting</h1>
      <ArtCard art={art} />
    </div>
  );
}
