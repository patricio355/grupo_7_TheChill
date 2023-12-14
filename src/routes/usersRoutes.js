const express = require('express');
const userRoutes = express.Router();
const session = require("express-session");
const path = ("path");
const multer = require('multer');
const upload = multer({ dest: '../../public/images/profilephotos' });
const authMiddleware = require ('../middlewares/authMiddleware.js')
const guestMiddleware = require ('../middlewares/guestMiddleware.js')

// configuracion de multer
const uploadFile = require("../middlewares/multerMiddleware");
// configuracion de express-validator
const validations = require("../middlewares/validatorMiddlewares");

const usersControllers = require("../controllers/usersControllers.js");

userRoutes.get('/register', guestMiddleware ,usersControllers.register);
userRoutes.post("/register",uploadFile.single("avatar"), validations,usersControllers.processRegister);

userRoutes.get('/login', guestMiddleware , usersControllers.login);
userRoutes.post("/login",uploadFile.single("avatar"), validations, usersControllers.loginProcess);

userRoutes.get("/profile/:id", authMiddleware , usersControllers.profile);
userRoutes.get("/logout", usersControllers.logOut);
userRoutes.post("/profile/edit/:id", usersControllers.updateUser);

module.exports = userRoutes;