const cors = require('cors');

module.exports = cors({
    preflightMaxAge: 5, //Optional
    origins: ['*'],
    allowHeaders: ['*'],
    exposeHeaders: ['*']
});