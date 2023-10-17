const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('Iphone', {
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
  description: {
    type: DataTypes.TEXT,
  },
});
