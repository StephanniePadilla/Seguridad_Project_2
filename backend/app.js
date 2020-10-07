/*
Configuració de express (pk cada cop que es guardi, s'engegi el servidor)
A més indica que utilitzarem la URL api, exportant el modul creat a rutes
 */

const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors')
const morgan=require('morgan')
const hbs = require('express-handlebars')

//con esto definimos las rutas de la carpeta "routes"
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');

//initializations
const app = express()

//settings
//Cuando haya variable de entorno sera PORT y sino 3000
app.set('port', process.env.PORT || 3001);

//middlewares
//app.use(morgan('dev'));
app.use(cors())
app.options('*',cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//app.use(express.json());
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')


//definimos rutas por defecto
app.use('/index', indexRouter);
app.use('', usersRouter);



//CONTROL DE ERRORES
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
