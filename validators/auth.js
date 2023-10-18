const { check, validationResult } = require("express-validator");
const { resolveObj } = require("../utils/msgErrorsValidators")
// const { validateResult } = require("../utils/handleValidator");

const validateLogin = [
  check("email")
  .exists()
  .notEmpty().withMessage('Correo vacío')
  .isEmail().withMessage('Correo inválido'),
  check("password")
  .exists()
  .notEmpty().withMessage('Contraseña vacía')
  .isLength({min: 8, max: 16}).withMessage('Debe ingresar una contraseña entre 8 y 16 caracteres'),
  (req, res, next) => {
    validateResult(req, res, next);
  },

];

const validateRegister = [
  check("name").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min:8, max:15 }),
  // validates
  // (req, res, next) => {
  //   validates;
  // },
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
