const { Sequelize } = require('sequelize');
const Iphone = require("./models/Iphone")
const Imagenes = require("./models/Imagenes")
require('dotenv').config()
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

Iphone(sequelize)
Imagenes(sequelize)
module.exports = {
  ...sequelize.models,
  sequelize
}
