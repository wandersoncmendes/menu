require('dotenv').config();

const jwt = require('jsonwebtoken');
const exclusions = require('./exclusions');

module.exports = (req, res, next) => {
    if (exclusions.includes(req.path)) 
        return next();

    const reply = require('../../../utils/reply')(req, res);

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return reply.code(401).error({ message: 'No token provided' });
    }

    const parts = authHeader.split(' ');

    if (!parts.length === 2) {
        return reply.code(401).error({ message: 'Token error' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return reply.code(401).error({ message: 'Token malformated' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return reply.code(401).message('Invalid token', 'Token de sessão expirado').error({ error });
        }

        req.user = decoded
        return next();
    });
}