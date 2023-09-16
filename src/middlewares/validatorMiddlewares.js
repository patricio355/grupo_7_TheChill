const { body } = require("express-validator");
const path = require("path");



//validacion del formulario
const validations =[
    body("usuario").notEmpty().withMessage("Nombre Completo"),
    body("lastname").notEmpty().withMessage("Apellido"),
    body("email").notEmpty().withMessage("Escribir un correo electrónico").bail().isEmail().withMessage("Debes escribir un formato de correo válido"),
    body("confirmed-email").notEmpty().withMessage("Confirmar correo electrónico"),
    body("pass").notEmpty().withMessage("Tienes que escribir una contraseña").isNumeric().withMessage(""),
    body("confirmed-pass").notEmpty().withMessage("Confirmar contraseña")
]

module.exports = validations;