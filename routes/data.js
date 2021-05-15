const router = require('express').Router();
const validate = require('./validate');
const User = require('../models/User');

router.post('/', validate, async (req,res) =>{
    const user = await User.findOne({username: req.user});
    res.send(`Data: #%3543673^$6546$654^%465$65 [Confidential Info for ${user.name}]`);
});

module.exports = router;