
const { Sequelize } = require('sequelize');
const Iphone = require("./models/Iphone")
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
const sequelize = new Sequelize('techno', 'postgres', 'belgrano2012', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});
Iphone(sequelize)

module.exports = {
  ...sequelize.models,
  sequelize
}