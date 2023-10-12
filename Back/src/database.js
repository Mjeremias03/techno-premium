const { Sequelize } = require('sequelize');
const Iphone = require("./models/Iphone")
require('dotenv').config()
const {
  DB_USER, DB_PASSWORD, DB_HOST,
  DB_BASE, DB_PORT // Agrega DB_PORT para el puerto
} = process.env;

const sequelize = new Sequelize(DB_BASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT, // Especifica el puerto
  dialect: 'postgres',
  logging: false
});

Iphone(sequelize)

module.exports = {
  ...sequelize.models,
  sequelize
}
