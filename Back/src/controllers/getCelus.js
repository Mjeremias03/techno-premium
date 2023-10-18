const { where } = require('sequelize');
const { Iphone } = require('../database');

const getCelular = async (req, res) => {
    const { id } = req.params;
   
    try {
        const celular = await Iphone.findByPk(id);
        if (!celular) {
            return res.status(404).json({ error: 'Celular no encontrado' });
        }
        res.json(celular);
        return celular
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getCelulares = async (req, res) => {
    try {
        console.log(Iphone)
        const celulares = await Iphone.findAll();
        res.json(celulares);
    } catch (error) {
        console.error("Error al obtener celulares con imágenes:", error);
        res.status(500).json({ error: "Error al procesar los datos." });
    }
};

module.exports = {
    getCelular,
    getCelulares
}
