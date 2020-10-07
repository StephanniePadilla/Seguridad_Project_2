//Fichero que contiene las rutas de la API
//Importamos y ejecutamos router de express
const express = require('express')
const userController = require('../controllers/user.controller')

//Router nos permite gestionar rutas de la API
const router = express.Router()


//Controlador de demo que contiene lo que se ejecutara
//cuando hagamos la peticion

//Peticiones HTTP
router.get('/user/' /*RUTA*/, userController.getUsers /*FUNCION DEL CONTROLADOR*/)
router.get('/user/:userId', userController.getUser)
router.post('/register', userController.newUser)

//Exportamos router para usar rutas en app.ts
module.exports = router
