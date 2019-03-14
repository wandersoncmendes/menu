const routes = require('express').Router();

routes.post('/login', (req, res) => {

    let { username, password } = req.body;

    if (!username || username.trim() === '')
        return req.reply.code(400).message('[username] required', 'Nome do usuário é um campo obrigatório').end();
    if (!password || password.trim() === '')
        return req.reply.code(400).message('[password] required', 'Senha do usuário é um campo obrigatório').end();
     
});

module.exports = routes;