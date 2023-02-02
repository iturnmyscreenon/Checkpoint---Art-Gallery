import React from "react";
import PropTypes from "prop-types";
import Artcard from "./Artcard";
import SampleCard from "../helpers/sampleCard";

export default function Artlist({ artList }) {
  return (
    <ul className="ArtList">
      {artList.map((artWork) => (
        <Artcard key={artWork.id} art={artWork} />
      ))}
    </ul>
  );
}

Artlist.defaultProps = {
  artList: [],
};

Artlist.propTypes = {
  artList: PropTypes.arrayOf(SampleCard),
};
