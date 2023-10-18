const { Sequelize } = require('sequelize');
const IphoneModel = require("./models/Iphone"); // Importa el modelo Iphone
const ImagenesModel = require("./models/Imagenes"); // Importa el modelo Imagenes
require('dotenv').config();

const {
  DB_USER, DB_PASSWORD, DB_HOST,
  DB_BASE, DB_PORT 
} = process.env;

const sequelize = new Sequelize(DB_BASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: false 
});

// Define las relaciones entre los modelos
const Iphone = IphoneModel(sequelize);
const Imagenes = ImagenesModel(sequelize);

Iphone.hasMany(Imagenes, { foreignKey: 'iphoneId' });

module.exports = {
  Iphone,
  Imagenes,
  sequelize
};
