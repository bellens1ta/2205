const express = require('express')

const router = express.Router()
const {reservasController, reservaIdController, deleteReservaPorIdController} = require ('../controllers/reserva.controller')

router.get('/reserva', reservasController) //recupera el array de reservas
router.get('/reserva/:id', reservaIdController) // recupera la reserva por id
router.delete('/reserva/:id', deleteReservaPorIdController)

module.exports = { reservaRoute : router}