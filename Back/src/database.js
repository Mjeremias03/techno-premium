const { Sequelize } = require('sequelize');
const Iphone = require("./models/Iphone")
require('dotenv').config()
const {
  DB_USER, DB_PASSWORD, DB_HOST,
  DB_BASE, DB_PORT 
} = process.env;

const sequelize = new Sequelize(DB_BASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: console.log // Utiliza la función console.log para el registro
});

Iphone(sequelize)

module.exports = {
  ...sequelize.models,
  sequelize
}
