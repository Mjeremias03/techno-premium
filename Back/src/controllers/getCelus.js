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


const getCelulares = async (req,res) =>{
    try {
        const celulares = await Iphone.findAll() 
        celulares? res.json(celulares): res.json("throwError")
    } catch (error) {
        res.json(error=error.message)
    }
   
    
}
module.exports = {
    getCelular,
    getCelulares
}
