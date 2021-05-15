const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send("Login route");
});

router.post('/', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    if(!user) return res.status(401).send({err: "Invalid username or password"});

    const checkPass = await bcrypt.compare(req.body.password, user.password);

    if(!checkPass) return res.status(401).send({err: "Invalid username or password"});

    const token = jwt.sign(user.username, process.env.TOKEN_SECRET);

    await User.updateOne({_id: user._id}, {token: token});

    res.send({username: user.username, name: user.name, token: token});
});

module.exports = router;