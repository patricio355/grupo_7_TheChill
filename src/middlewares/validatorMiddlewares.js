const { body } = require("express-validator");
const path = require("path");

const validations = [
  body("firstname").notEmpty().withMessage("Introduzca un nombre"),
  body("lastname").notEmpty().withMessage("Introduzca un apellido"),
  body("gender").notEmpty().withMessage("Introduzca un género"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
  // body("country").notEmpty().withMessage("Tienes que elegir un país"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];

module.exports = validations;