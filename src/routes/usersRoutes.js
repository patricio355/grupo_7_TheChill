const express = require('express');
const userRoutes = express.Router();

const usersControllers = require("../controllers/usersControllers.js");

userRoutes.get('/login', usersControllers.login);
userRoutes.get('/register', usersControllers.register);

module.exports = userRoutes;