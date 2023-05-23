const reserva = require('../../data/reservas.json')

const reservasController =  ( req , res )=>{
    res.status(200).json( reserva )
}
