const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const tokenSign = async (email) => {
  return jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return null;
  }
};

const decodeSign = async (token) => {
  return jwt.decode(token, null);
};

const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};

const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};

module.exports = { tokenSign, decodeSign, verifyToken, encrypt, compare };
