const {Router} = require("express")
const getImagenes = require("../controllers/imagenes")
const imaganesRouter = Router()
imaganesRouter.get("/", getImagenes)

module.exports= imaganesRouter