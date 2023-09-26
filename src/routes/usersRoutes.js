const express = require('express');
const userRoutes = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../../public/images/profilephotos' });


// configuracion de multer
const uploadFile = require("../middlewares/multerMiddleware");
// configuracion de express-validator
const validations = require("../middlewares/validatorMiddlewares");

const usersControllers = require("../controllers/usersControllers.js");


userRoutes.get('/login', usersControllers.login);


userRoutes.get('/register', usersControllers.register);
userRoutes.post("/register",uploadFile.single("avatar"), validations,usersControllers.processRegister);


module.exports = userRoutes;