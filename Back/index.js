const { sequelize } = require("./src/database");
const app = require("./src/server");
require('dotenv').config()
const { DB_PORT } = process.env;

app.listen(DB_PORT, async () => {
  try {
    await sequelize.sync({ force: true });
    console.log(`Servidor en funcionamiento en el puerto ${DB_PORT}`);
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
});
