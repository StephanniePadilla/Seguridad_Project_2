'use strict'

/*
Configuració de express (pk cada cop que es guardi, s'engegi el servidor)
A més indica que utilitzarem la URL api, exportant el modul creat a rutes
 */

const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors')
//const morgan=require('morgan')
//const hbs = require('express-handlebars')

//con esto definimos las rutas de la carpeta "routes"
const indexRouter = require('./routes/index')
const usersRouter = require('./routes')

//initializations
const app = express()

//settings
//Cuando haya variable de entorno sera PORT y sino 3000
//app.set('port', process.env.PORT || 3001)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin","http://localhost:8100");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
  }
  next()
})

//middlewares
//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.options('*',cors())


//definimos rutas por defecto
app.use('/index', indexRouter)
app.use('', usersRouter)


module.exports = app
