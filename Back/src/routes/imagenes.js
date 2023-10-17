const { Router } = require('express');
const getImagenes = require('../controllers/imagenes');
const imagenesRouter = Router();

imagenesRouter.get('/:modelo/:imagen', getImagenes);

module.exports = imagenesRouter;
