const { transporter } = require('../../utils/mailconfig')
const { tokenSign } = require("../../utils/handleToken");
const URL_FRONT = process.env.URL_FRONT ?? 'http://localhost'

const authService = async (credentials) => {
  try {
    // Obtenemos el token temporal //
    const tokenJwt = await tokenSign(credentials.email);
    
    // Envío de correo con el JWT // 
    await transporter.sendMail({
      from: '"Wilmer" <wilmersolorzano.dev@gmail.com>', // sender address
      to: credentials.email,
      subject: "Inicio de Sesión",
      html: `
      <h3>Token Generado: </h3>
      <b> ${tokenJwt} </b>
      <br>
      <a href="${URL_FRONT}/Frontend/confirm/confirm.html"> Por favor dé click aquí para ingresar el token generado e iniciar sesión</a>
      `,
    });

  } catch (error) {
    // Manejo del error
    throw new Error('No se pudo enviar el correo');
  }
};

// Exporta los servicios
module.exports = {
  authService
};