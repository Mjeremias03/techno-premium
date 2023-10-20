const { Router } = require("express");
const getCelular = require("../controllers/Celulares");
const imaganesRouter = require("./imagenes");
const celularesRouter = require("./celulares");
const sendEmail = require("../controllers/sendEmail.js");

const route = Router();
route.post("/contact", sendEmail);
route.get("/", getCelular);
route.use("/celulares", celularesRouter);
route.use("/imagenes", imaganesRouter);

module.exports = route;
