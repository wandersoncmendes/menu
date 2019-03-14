const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');

class Server {

    constructor() {
        this.app = express();

        /** 
         * middlewares 
         */
        this.middlewares();

        /**
         * routes
         */
        this.routes();
    }

    middlewares() {
        this.app.use(process.env.NODE_ENV === "dev" ? morgan("dev") : morgan("tiny"));
        this.app.use(bodyParser.json());
        this.app.use(require('../utils/reply'));
        this.app.use(require('./middlewares/cors'))
        this.app.use(require('./middlewares/jwt/jwtMiddleware'));
    }

    routes() {
        this.app.use('/api', require('./routes/login'));
    }

}

module.exports = new Server().app;