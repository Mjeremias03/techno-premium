const { DataTypes } = require('sequelize');
const  {Imagenes}  = require('../database.js');

module.exports = (sequelize) => {
  const Iphone = sequelize.define('Iphone', {
    marca: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    imagenes: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    almacenamiento: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull:false
    },
    Procesador:{
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
  })
  return Iphone;
};

