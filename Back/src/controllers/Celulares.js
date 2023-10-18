const { Iphone, Imagenes } = require("../database");
const fs = require("fs");

const getCelular = async (req, res) => {
  try {
    // Lee el archivo JSON
    const rawData = fs.readFileSync("celulares.json");
    const celularesData = JSON.parse(rawData);

    // Procesa los datos si es necesario
    const newData = celularesData.map((elemento) => ({
      marca: elemento.marca,
      modelo: elemento.modelo,
      imagenes: elemento.imagenes.map((e)=> e),
      precio: elemento.precio,
      sistema_operativo: elemento.sistema_operativo,
      pantalla: elemento.pantalla,
      camara_principal: elemento.camara_principal,
      almacenamiento: elemento.almacenamiento,
      ram: elemento.ram,
      bateria: elemento.bateria,
    }));

    // // 1. Lee las imágenes de tu base de datos
    // const imagenes = await Imagenes.findAll();

    // // 2. Asocia las imágenes con los celulares correspondientes
    // for (const celular of newData) {
    //   // Filtra las imágenes que coinciden con el modelo de celular
    //   const matchingImagenes = imagenes.filter((imagen) => {
    //     return imagen.nombre === celular.modelo;
    //   });

    //   // Asocia las imágenes con el celular (agrega las imágenes al objeto del celular)
    //   celular.imagenes = matchingImagenes;
    // }

    // // Recorremos newData y verificamos si ya existe el celular en la base de datos antes de guardarlo
    // for (const celular of newData) {
    //   const existingCell = await Iphone.findOne({ where: { modelo: celular.modelo } });

    //   if (!existingCell) {
    //     await Iphone.create(celular, {
    //       include: Imagenes, // Esto asocia las imágenes al guardar los celulares
    //     });
    //   }
    // }

    await Iphone.bulkCreate(newData)
    console.log(Iphone)
    res.status(200).json(newData);
  } catch (error) {
    console.error("Error al guardar celulares en la base de datos:", error);
    res.status(500).json({ error: "Error al procesar los datos." });
  }
};

module.exports = getCelular;

