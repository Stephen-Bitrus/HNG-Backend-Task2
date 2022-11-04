const worker = require('./workit.controller');
const express = require('express');

const postRouter = express.Router();

postRouter.post('/', worker);

module.exports = postRouter;