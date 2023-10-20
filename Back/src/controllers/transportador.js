const nodemailer = require("nodemailer");
require('dotenv').config()
const{PASS, USER} = process.env

const transporte = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: USER,
        pass: PASS,
    },
});

transporte.verify().then(() => {
    console.log("email enviado con éxito");
});

module.exports = transporte;
