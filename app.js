// Require Express..
const express = require('express');
const postRouter = require('./route/workit.route');

// Init App..
const app = express();
app.use(express.json());


app.use('/workit', postRouter);

module.exports = app;