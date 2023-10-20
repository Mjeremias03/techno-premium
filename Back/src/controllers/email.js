const transporte = require("../controllers/Trans");

const sendEmail = async (req, res) => {
  try {
    const { name, from } = req.body;

    const emailOptions = {
        from: `Mensaje enviado por ${from}`, // Use the 'from' address provided in the request body
        to: "jeremingolla03@gmail.com",
        subject: `¡Bienvenido, ${name}!`,
        html: `
        <div style="background: linear-gradient(to bottom, #E6D0FF, #B897FF); text-align: center; padding: 20px; display: flex; flex-direction: column; color: #fff;">
        <div style="flex: 1;">
          <p style="font-size: 24px; margin-bottom: 20px;">¡Bienvenido, ${name}!</p>
          <p style="font-size: 18px;">Te damos la bienvenida a nuestra plataforma.</p>
          <p style="font-size: 18px;">Estaremos en contacto para informarte sobre nuevas ofertas, adquisiciones, accesorios.</p>
          <p style="font-size: 18px; margin: 20px 0;">Si necesitas algo, no dudes en consultarnos. Estamos aquí para ayudarte con cualquier pregunta que tengas, ya sea sobre stock, servicios o cualquier otro tema.</p>
          <a href="https://api.whatsapp.com/send?phone=3518005218&text=Hola!%20Quiero%20consultar%20stock%20y%20formas%20de%20pago" target="_blank">
            <button style="background-color: #00ff00; color: #fff; font-size: 18px; padding: 10px 20px; border: none; cursor: pointer; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: box-shadow 0.3s;">
              ¡Contáctanos en WhatsApp!
            </button>
          </a>
        </div>
        <div style="flex: 1; text-align: center;">
          <img src="https://techno-premium.vercel.app/nuevo.jpg" alt="Welcome Image" style="max-width: 100%; margin: 20px 0;">
        </div>
      </div>      
        `,
      };

    transporte.sendMail(emailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email sent successfully:", info.response);
        res.status(200).json({ message: "Email sent successfully" });
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = sendEmail;
