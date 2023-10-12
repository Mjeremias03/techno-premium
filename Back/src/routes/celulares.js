const { Router } = require('express');
const {getCelular,getCelulares} = require('../controllers/getCelus');

const celularesRouter = Router();
celularesRouter.get("/:id", getCelular);
celularesRouter.get("/", getCelulares)

module.exports = celularesRouter;
