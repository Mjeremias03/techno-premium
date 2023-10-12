const { Router } = require("express");
const getCelular = require("../controllers/Celulares");
const celularesRouter = require("./celulares");
const route = Router();

// Ruta para manejar solicitudes a la raíz "/"
route.get("/", getCelular);

// Ruta para manejar solicitudes a "/celulares"
route.use("/celulares", celularesRouter);

module.exports = route;
