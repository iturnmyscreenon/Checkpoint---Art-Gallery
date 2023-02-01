import { PropTypes } from "prop-types";

const ArtCard = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.shape({ url: PropTypes.string }),
}).isRequired;

export default ArtCard;
