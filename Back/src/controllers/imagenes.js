const fs = require('fs');
const path = require('path');
const { Imagenes, Iphone } = require('../database');

const getImagenes = async (req, res) => {
  const publicPath = path.join(__dirname, '../../public');

  try {
    // Lee todas las subcarpetas en /public
    const subcarpetas = fs.readdirSync(publicPath);

    for (const subcarpeta of subcarpetas) {
      const subcarpetaPath = path.join(publicPath, subcarpeta);

      // Verifica si es una carpeta
      if (fs.statSync(subcarpetaPath).isDirectory()) {
        const archivos = fs.readdirSync(subcarpetaPath);
        
        const imagenes = archivos
          .filter((archivo) => {
            const extension = path.extname(archivo);
            return ['.jpg', '.png', '.webp'].includes(extension);
          })
          .map((archivo) => {
            return {
              nombre: archivo,
              ruta: path.join('/public', subcarpeta, archivo),
            };
          });

        // Busca el modelo de iPhone correspondiente según el nombre de la subcarpeta
        const iphone = await Iphone.findOne({
          where: { modelo: subcarpeta },
        });

        if (iphone) {
          // Relaciona las imágenes con el modelo de iPhone
          for (const imagen of imagenes) {
            imagen.iphoneId = iphone.id;
            await Imagenes.create(imagen);
          }
        }
      }
    }

    res.json({ message: 'Imágenes procesadas correctamente' });
  } catch (error) {
    console.error('Error al procesar las imágenes:', error);
    res.status(500).json({ error });
  }
};

module.exports = getImagenes;
