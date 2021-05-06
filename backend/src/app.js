require("dotenv").config({path:"./config.env"});
const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/users', require('./routes/user.route'));
app.use('/private', require('./routes/private'));


module.exports = app;