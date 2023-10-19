const { check, validationResult } = require("express-validator");
const { resolveObj } = require("../utils/msgErrorsValidators")

const validateLogin = [
  check("email")
  .exists()
  .notEmpty().withMessage('Email empty')
  .isEmail().withMessage('Email invalid'),
  check("password")
  .exists()
  .notEmpty().withMessage('Password empty')
  .isLength({min: 8, max: 16}).withMessage('You must enter a password between 8 and 16 characters'),
  (req, res, next) => {
    validateResult(req, res, next);
  },

];

const validateRegister = [
  check("name").exists()
  .notEmpty().withMessage('Name empty'),
  check("email")
  .exists()
  .notEmpty().withMessage('Email empty')
  .isEmail().withMessage('Email invalid'),
  check("password").exists()
  .notEmpty().withMessage('Password empty')
  .isLength({min: 8, max: 16}).withMessage('You must enter a password between 8 and 16 characters'),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateResult = async (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        res.status(400).send({ errors: await resolveObj(err.array()) })
    }
}


module.exports = { validateLogin, validateRegister };
