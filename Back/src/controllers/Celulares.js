const { Iphone } = require("../database");
const fs = require("fs");

// Importa la configuración de la base de datos desde Railway
const { sequelize } = require("../database");

const getCelular = async (req, res) => {
  try {
    // Lee el archivo JSON
    const rawData = fs.readFileSync("celulares.json");
    const celularesData = JSON.parse(rawData);

    // Procesa los datos si es necesario
    const newData = celularesData.map((elemento) => {
      // Tu lógica de procesamiento de datos aquí
    });

    // Conecta a la base de datos
    await sequelize.authenticate();

    for (const celular of newData) {
      const exist = await Iphone.findOne({
        where: {
          marca: celular.marca,
          modelo: celular.modelo,
        },
      });

      if (!exist) {
        console.log("Insertando celular:", celular.marca, celular.modelo);
        await Iphone.create(celular);
      } else {
        console.log("Ya existe este celular:", celular.marca, celular.modelo);
      }
    }
    res.status(200).json(newData);
  } catch (error) {
    console.error("Error al guardar celulares en la base de datos:", error);
    res.status(500).json({ error: "Error al procesar los datos." });
  }
};

module.exports = getCelular;
