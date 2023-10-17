const { Router } = require("express");
const getCelular = require("../controllers/Celulares");
const imaganesRouter = require("./imagenes")
const celularesRouter = require("./celulares");
const route = Router();

// Ruta para manejar solicitudes a la raíz "/"
route.get("/", getCelular);
route.use("/celulares", celularesRouter);
route.use("/imagenes", imaganesRouter)
module.exports = route;
