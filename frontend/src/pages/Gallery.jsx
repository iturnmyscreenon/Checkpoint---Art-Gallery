import React, { useEffect, useState } from "react";
import axios from "axios";
import Artlist from "../components/Artlist";

export default function Gallery() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/art`)
      .then((response) => {
        setArt(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="gallery">
      <h1 className="galleryTitle">GALLERY</h1>
      <div className="galleryList" />
      <Artlist artList={art} />
    </div>
  );
}
