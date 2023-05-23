const express = require('express')

const {vehiculosController,vehiculoPatenteController,modificarVehiculoController} = require ('../controllers/vehiculos.controller')

const router = express.Router()


router.get('/vehiculos', vehiculosController)// recupera el array de vehiculos
router.get('/vehiculos/:patente', vehiculoPatenteController) // recupera la patente solicitada por url
router.put('vehiculos/:patente', modificarVehiculoController)

module.exports = {vehiculosRoute : router}