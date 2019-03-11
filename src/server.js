const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(process.env.NODE_ENV === "dev" ? morgan("dev") : morgan("tiny"));

app.use(process.env.NODE_ENV === "dev" ?
    morgan("dev") :
    morgan("tiny"));

app.use(require('./middlewares/cors'))
app.use('/api', require('./routes/login'));

module.exports = app;