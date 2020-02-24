const routes = require('express').Router();
const { User } = require('../models');

routes.post('/login', async (req, res) => {
    
    const reply = require('../../utils/reply')(req, res);

    try {
        await User.create({
            name: 'neillon',
            email: 'neilloncesar13@gmail.com',
            password: '123456'
        });

        return reply.code(200).message('ok', 'Usuario criado com sucesso').end();
    } catch (error) {
        return reply.code(400).error(error).message('error', 'Nao foi possivel inserir usuario').end();
    }
});

module.exports = routes;