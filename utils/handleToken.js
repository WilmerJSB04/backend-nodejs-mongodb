const jwt = require("jsonwebtoken");
require("dotenv").config();

const tokenSign = async (email) => {
  return jwt.sign({ email: email }, 'process.env.JWT_SECRET', { expiresIn: "1h" });
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, 'process.env.JWT_SECRET');
  } catch (e) {
    return null;
  }
};

const decodeSign = async (token) => {
  return jwt.decode(token, null);
};

module.exports = { tokenSign, decodeSign, verifyToken };
