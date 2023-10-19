const { Iphone } = require("../database");
const fs = require("fs");

const getCelular = async (req, res) => {
  try {
    // Lee el archivo JSON
    const rawData = fs.readFileSync("celulares.json");
    const celularesData = JSON.parse(rawData);

    // Procesa los datos si es necesario
    const newData = celularesData.map((elemento) => ({
      id: elemento.id,
      marca: elemento.marca,
      modelo: elemento.modelo,
      imagenes: elemento.imagenes.map((e) => e),
      precio: elemento.precio,
      sistema_operativo: elemento.sistema_operativo,
      pantalla: elemento.pantalla,
      camara_principal: elemento.camara_principal,
      almacenamiento: elemento.almacenamiento,
      ram: elemento.ram,
      bateria: elemento.bateria,
      descripcion:elemento.descripcion,
      Procesador: elemento.Procesador,
    }));

    for (const celular of newData) {
      // Verifica si ya existe un celular con el mismo id en la base de datos
      const existingCell = await Iphone.findOne({ where: { id: celular.id } });

      if (!existingCell) {
        // Si no existe, crea el celular en la base de datos
        await Iphone.create(celular);
      }
    }

    res.status(200).json(newData);
  } catch (error) {
    console.error("Error al guardar celulares en la base de datos:", error);
    res.status(500).json({ error: "Error al procesar los datos." });
  }
};

module.exports = getCelular;
