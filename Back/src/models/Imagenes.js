const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Imagenes = sequelize.define('Imagenes', {
    id: {
      type: DataTypes.UUID, // Cambiado de INET a UUID
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // Asignar un valor UUID por defecto
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING, // Puedes utilizar STRING para el nombre del archivo
      allowNull: false,
    },
    ruta: {
      type: DataTypes.STRING, // Puedes utilizar STRING para la ruta del archivo
      allowNull: false,
    },
  });

  return Imagenes;
};
