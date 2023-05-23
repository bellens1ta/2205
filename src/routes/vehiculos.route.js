const express = require('express')

const {vehiculosController} = require ('../controllers/vehiculos.controller')

const router = express.Router()


router.get('/vehiculos', vehiculosController) // recupera el array de vehiculos

module.exports = {vehiculosRoute : router}