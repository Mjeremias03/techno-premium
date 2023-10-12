const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('Iphone', {
  marca: {
    type: DataTypes.STRING,

  },
  stock:{
    type:DataTypes.INTEGER,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  almacenamiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagenes: {
    type: DataTypes.ARRAY(DataTypes.TEXT), // Cambiado a ARRAY de STRING
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bateria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id: {
    type: DataTypes.UUID, // Cambiado a INTEGER
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  stock: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
  },
});
