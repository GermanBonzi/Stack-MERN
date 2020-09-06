const express = require ('express')
//morgan permite ver en consola las peticiones al servidor
const morgan = require('morgan')
const path = require ('path')
const { mongoose }= require('./databaseconnect')
const router = require('./routes/usuarios.routes')
const server = express()



// Configuracion 
server.set('port',process.env.PORT || 3000)

// Middlewares
server.use(morgan('dev'))
server.use(express.json())




// Rutas 
server.use('/api',router)


// Archivos estaticos 
server.use(express.static(path.join(__dirname,'public')))





// iniciar servidor 
server.listen(server.get('port'))
console.log(`server en el puerto ${server.get('port')}`)