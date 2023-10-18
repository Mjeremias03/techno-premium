const fs = require('fs');
const path = require('path');
const { Imagenes, Iphone } = require('../database');

const getImagenes = async (req, res) => {
  const publicPath = path.join(__dirname, "../../public");
  try {
    const subcarpetas = fs.readdirSync(publicPath);
    const imagenesData = [];

    for (const subcarpeta of subcarpetas) {
      const subcarpetaPath = path.join(publicPath, subcarpeta);

      const archivos = fs.readdirSync(subcarpetaPath);

      const imagenes = archivos
        .filter((archivo) => {
          const extension = path.extname(archivo);
          return [".jpg", ".png", ".webp"].includes(extension);
        })
        .map((archivo) => {
          return {
            nombre: subcarpeta,
            ruta: path.join("public", subcarpeta.replace(/ /g, '_'), archivo),
          };
        });
      console.log(subcarpeta);
      imagenesData.push(...imagenes);
    }

    // Asociar las imágenes a los modelos iPhone según el nombre del modelo
    for (const imagen of imagenesData) {
      const iphoneModelo = imagen.nombre;
      const iphone = await Iphone.findOne({ where: { modelo: iphoneModelo } });

      if (iphone) {
        const existingImagen = await Imagenes.findOne({
          where: { nombre: iphoneModelo, ruta: imagen.ruta },
        });
        if (!existingImagen) {
          await Imagenes.create({
            nombre: iphoneModelo,
            ruta: imagen.ruta,
            iphoneId: iphone.id,
          });
        }
      }
    }

    res.json({imagenesData}); // Enviando los datos de las imágenes como respuesta
  } catch (error) {
    console.error("Error al procesar las imágenes:", error);
    res.status(500).json({ error });
  }
};

module.exports = getImagenes;
