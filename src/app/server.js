const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const helmet = requier('helmet');

class Server {

    constructor() {
        this.app = express();


        this.middlewares();


        this.routes();
    }
    /** 
    * middlewares 
    */
    middlewares() {
        this.app.use(process.env.NODE_ENV === "dev" ? morgan("dev") : morgan("tiny"));
        this.app.use(bodyParser.json());
        this.app.use(require('./middlewares/cors'))
        this.app.use(require('./middlewares/jwt/jwtMiddleware'));
        this.app.use(helmet())
    }
    /**
    * routes
    */
    routes() {
        this.app.use('/api', require('./routes/login'));
    }

}

module.exports = new Server().app;