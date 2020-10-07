'use strict'

//Fichero que contiene las rutas de la API
//Importamos y ejecutamos router de express
const express = require('express')
const userController = require('../controllers/user')

//Router nos permite gestionar rutas de la API
const router = express.Router()


//Controlador de demo que contiene lo que se ejecutara
//cuando hagamos la peticion

//Peticiones HTTP
router.get('/users', userController.getUsers),
    router.get('/user/:userId', userController.getUser),
    router.post('/register', userController.newUser),

//Exportamos router para usar rutas en app.js
    module.exports = router

/*const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router*/