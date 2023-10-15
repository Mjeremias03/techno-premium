const { sequelize } = require("./src/database");
const app = require("./src/server");
require('dotenv').config()
const { PORT } = process.env;

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: false });
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
});
