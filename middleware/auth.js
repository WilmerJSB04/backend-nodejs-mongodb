const { verifyToken } = require("../utils/handleToken");

const authGuard = async (req, res, next) => {
  
  const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : req.params.token;
  const validationToken = await verifyToken(token);

  if (!validationToken) {
    return res.status(401).send({error: true, message: 'Unauthorized User',});
  }

  req.validatedToken = validationToken;

  next();
};

module.exports = authGuard;
