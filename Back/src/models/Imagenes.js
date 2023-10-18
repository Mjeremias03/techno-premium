const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Imagenes extends Model {}

  Imagenes.init(
    {
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
    },
    {
      sequelize,
      modelName: 'Imagenes',
    }
  );

  return Imagenes;
};
