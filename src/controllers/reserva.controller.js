const reserva = require('../../data/reservas.json')

const reservasController =  ( req , res )=>{
    res.status(200).json( reserva )
}

const reservaIdController = ( req, res) => {
    const id = req.params.id
    const reservaId = reserva.find( a => a.id == id)
    if(reservaId)
        res.status(200).json(reservaId)
    else 
        res.status(404).json({mensaje : `La reserva con el Id: ${id} no existe`})
}

const deleteReservaPorIdController  = ( req, res) => {
    const id = req.params.id
    const indiceIdBorrar = reserva.findIndex( a => a.id == id)
    if(indiceIdBorrar >= 0) {
        reserva.splice(indiceIdBorrar, 1)
        res.status(200).json({mensaje: `La reserva con el Id: ${id} se borro de manera exitosa`})
    } else 
        res.status(404).json({mensaje : `La reserva con el Id: ${id} no esta registrada.`})
}


module.exports = {reservasController,reservaIdController, deleteReservaPorIdController}
