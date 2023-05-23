const express = require('express')

const router = express.Router()
const {reservasController} = require ('../controllers/reserva.controller')

router.get('/reserva', ( req, res)=> {
    res.status(200).json({mensaje: "funciona la ruta de reserva"})
})

module.exports = { reservaRoute : router}