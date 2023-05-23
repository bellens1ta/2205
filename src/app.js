const express = require('express')
const app = express()

const { vehiculosRoute } = require('./routes/vehiculos.route')
const { reservaRoute } = require('./routes/reserva.route')

const PORT = process.env.PORT || 3001


app.use(express.json())
app.use(vehiculosRoute)
app.use(reservaRoute)

app.listen( PORT , ()=>{ console.log(`Arranco en el puerto ${PORT}`)} )