const nodemailer = require("nodemailer");

const transporte = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: "jeremingolla03@gmail.com",
        pass: "lzek gbce karj rhzw",
    },
});

transporte.verify().then(() => {
    console.log("email enviado con éxito");
});

module.exports = transporte;
