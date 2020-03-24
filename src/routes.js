const express = require('express');

const routes = express.Router();

routes.get('/users', getUsers);

module.exports = routes;