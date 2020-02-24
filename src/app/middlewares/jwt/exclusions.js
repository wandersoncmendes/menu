require('dotenv').config();

module.exports = [
    'login',
    'logout',
    'register'
].map(item => `/${process.env.API_PREFIX}/${item}`);