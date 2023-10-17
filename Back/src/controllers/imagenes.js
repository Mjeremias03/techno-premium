const fs = require('fs');
const path = require('path');

const getImagen = (req, res) => {
  const modelo = req.params.modelo;
  const imagen = req.params.imagen; 

  const rutaImagen = path.join(__dirname, 'public', modelo, imagen);

  // Verifica si la imagen existe y, si es así, la envía como respuesta
  if (fs.existsSync(rutaImagen)) {
    res.sendFile(rutaImagen);
  } else {
    res.status(404).send('Imagen no encontrada');
  }
};

module.exports = getImagen;

