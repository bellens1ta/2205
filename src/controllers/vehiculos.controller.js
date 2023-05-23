const vehiculos = require('../../data/vehiculos.json')

const vehiculosController =  ( _ , res )=>{
    res.status(200).json( vehiculos )
}

module.exports = {vehiculosController}