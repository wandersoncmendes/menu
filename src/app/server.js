const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const app = express();

/** 
 * middlewares 
 */
app.use(process.env.NODE_ENV === "dev" ? morgan("dev") : morgan("tiny"));
app.use(bodyParser.json());
app.use(require('./middlewares/cors'))
app.use(require('./middlewares/jwt/jwtMiddleware'));

/**
 * routes
 */
app.use('/api', require('./routes/login'));

module.exports = app;