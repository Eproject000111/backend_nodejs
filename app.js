var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
require('dotenv').config();
// require('./config/config.db');

var swaggerUi = require('swagger-ui-express')
// var YAML = require('yamljs');
// var swaggerJsDoc = YAML.load('./api.yaml')
var swaggerJsDoc = require("swagger-jsdoc")

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      contact: {
        name: "John doe", // your name
        email: "john@web.com", // your email
        url: "web.com", // your website
      },
      license: {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
      }
    },
    // host: "localhost:3000",
    // basePath: "/",
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    schemes: ["http","https"],
  },
  
  apis: ['./src/routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var addressRouter = require('./src/routes/address.route');

var app = express();


// routers
// var route = express.Router();
// var router = require('./src/routes/index.js')(route);
// app.use('/app',router);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', indexRouter);
app.use('/app/user', usersRouter);
app.use('/app/user', addressRouter);

app.use("/",swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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
