const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;

const generateToken = (user) => {
  const token = jwt.sign(user, secretKey, { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
};
