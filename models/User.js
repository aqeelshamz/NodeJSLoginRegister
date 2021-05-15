const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    token: {
        type: String
    },
});

module.exports = mongoose.model("User", userSchema);