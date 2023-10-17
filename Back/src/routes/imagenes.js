const { Router } = require('express');
const getImagenes = require('../controllers/imagenes');
const imagenesRouter = Router();

imagenesRouter.get('/', getImagenes);

module.exports = imagenesRouter;
