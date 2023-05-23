const express = require('express')

const {vehiculosController} = require ('../controllers/vehiculos.controller')

const router = express.Router()


router.get('/vehiculos', ( req, res)=> {
    res.status(200).json({mensaje: "funciona la ruta de vehiculos"})
})

module.exports = {vehiculosRoute : router}