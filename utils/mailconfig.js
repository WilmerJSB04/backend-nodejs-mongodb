const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "wilmersolorzano.dev@gmail.com",
      pass: "tzpk pfjg ykaj grhr",
    },
  });

module.exports = {
    transporter
}