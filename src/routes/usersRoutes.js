const express = require('express');
const userRoutes = express.Router();


//configuracion de express-validator
const validations = require("../middlewares/validatorMiddlewares")

const usersControllers = require("../controllers/usersControllers.js");


userRoutes.get('/login', usersControllers.login);
userRoutes.get('/register', usersControllers.register);

userRoutes.post("/register", validations, usersControllers.register, usersControllers.processRegister);


module.exports = userRoutes;