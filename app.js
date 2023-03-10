var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
const config = require('./config/configEnv');
require('dotenv').config();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors');

var swaggerUi = require('swagger-ui-express')
// var YAML = require('yamljs');
// var swaggerJsDoc = YAML.load('./api.yaml')
const swaggerJSDoc = require('swagger-jsdoc');


var corsOption = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

// Swagger
// const swaggerDefinition = {
//   info: {
//     title: 'Node-Js-Auth API',
//     version: '1.0.0',
//     description: 'Documentation for Node-Js Auth backend API',
//   },
//   host: 'localhost:3000',
//   basePath: '/',
//   components: {
//     securitySchemes: {
//       bearerAuth: {
//         type: "apiKey",
//         name: "x-auth-token",
//         scheme: "bearer",
//         in: "header",
//       },
//     },
//   },
//   security: [
//     {
//       bearerAuth: [],
//     },
//   ],
// };
// const options = {
//   swaggerDefinition,
//   apis: ['./src/routes/*.js', './src/models/swaggerDef/definition.js'],
// };
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
    title: 'Node-Js-Auth API',
    version: '1.0.0',
    description: 'Documentation for Node-Js Auth backend API',
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          name: "x-auth-token",
          scheme: "bearer",
          in: "header",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/models/swaggerDef/definition.js'],
}
const swaggerSpec = swaggerJSDoc(options);

// app.get('/swagger.json', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   res.send(swaggerSpec);
// });

// app.get('/docs', (req, res) => {
//   res.sendFile(path.join(__dirname, 'redoc.html'));
// });

// const swaggerOptions = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Library API",
//       version: "1.0.0",
//       contact: {
//         name: "John doe", // your name
//         email: "john@web.com", // your email
//         url: "web.com", // your website
//       },
//       license: {
//         "name": "MIT",
//         "url": "https://opensource.org/licenses/MIT"
//       }
//     },
//     // host: "localhost:3000",
//     // basePath: "/",
//     servers: [
//       {
//         url: "http://localhost:3000",
//       },
//     ],
//     schemes: ["http","https"],
//   },
  
//   apis: ['./src/routes/*.js']
// }

// const swaggerDocs = swaggerJsDoc(swaggerOptions);

// var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var addressRouter = require('./src/routes/address.route');

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

app.use("/",swaggerUi.serve, swaggerUi.setup(swaggerSpec))

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
