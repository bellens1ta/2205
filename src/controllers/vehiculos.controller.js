const vehiculos = require('../../data/vehiculos.json')

const vehiculosController =  ( _ , res )=>{
    res.status(200).json( vehiculos )
}

const vehiculoPatenteController = ( req, res) => {
    const patente = req.params.patente
    const vehiculoPatente = vehiculos.find( a => a.patente == patente)
    if(vehiculoPatente)
        res.status(200).json(vehiculoPatente)
    else 
        res.status(404).json({mensaje : `La reserva con el Id: ${patente} no existe`})
}

const modificarVehiculoController = (req=patente, res)=>{
    const patente = patente
    const vehiculoPatente = vehiculos.find( a => a.patente == patente)

    const habilitado = req.body.habilitado
    const capacidad = req.body.capacidad
    const autonomiaKms  = req.body.autonomiaKms

    if (vehiculoPatente) {
    if (habilitado !== undefined) {
      vehiculoPatente.habilitado = habilitado;
    }
    if (capacidad !== undefined) {
      vehiculoPatente.capacidad = capacidad;
    }
    if (autonomiaKms !== undefined) {
      vehiculoPatente.autonomiaKms = autonomiaKms;
    }

    res.status(201).json({ mensaje: 'Vehículo actualizado' });
  } else {
    res.status(404).json({ mensaje: 'El Vehículo solicitado no se encuentra' });
  }
}



module.exports = {vehiculosController, vehiculoPatenteController,modificarVehiculoController}