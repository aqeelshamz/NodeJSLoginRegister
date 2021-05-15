const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const dataRoute = require('./routes/data');

app.use(express.json());
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/data', dataRoute);

app.get('/', (req, res) => {
    res.send("Welcome to my app.");
});

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) console.log(err);
    console.log("DB Connected!");
});

app.listen(3000);