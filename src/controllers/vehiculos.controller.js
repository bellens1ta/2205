const vehiculos = require('../../data/vehiculos.json')

const vehiculosController =  ( req , res )=>{
    res.status(200).json( vehiculos )
}