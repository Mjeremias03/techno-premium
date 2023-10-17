const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Imagenes = sequelize.define('Imagenes', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ruta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Definir la relación con el modelo Iphone
  Imagenes.associate = (models) => {
    Imagenes.belongsTo(models.Iphone, {
      foreignKey: 'iphoneId', // Nombre de la columna que almacena la clave externa
      onDelete: 'CASCADE', // Opciones de eliminación
    });
  };

  return Imagenes;
};
