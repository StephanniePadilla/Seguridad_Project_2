//Fichero que contiene las rutas de la API
//Importamos y ejecutamos router de express
var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
