const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.send('Register route');
});

router.post('/', async (req, res) => {
    const users = await User.findOne({username: req.body.username});
    if(users) return res.status(403).send({err: 'username already exist'});

    const password = req.body.password;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        password: hash
    });

    res.send(await newUser.save());
});

module.exports = router;