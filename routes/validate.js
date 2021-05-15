const User = require('../models/User');
const jwt = require('jsonwebtoken');

var validate = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.status(401).send('Unauthorized');

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if(err) return res.status(401).send('Unauthorized');
        req.user = user;
        next();
    });
}

module.exports = validate;