const express = require("express");
const adminRoutes = express.Router();
const multer = require('multer')
const path = require('path')

const adminControllers = require("../controllers/adminControllers.js");

//requerir body express-validator
const{body}=require('express-validator');

// configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
        const nameFile = `products_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, nameFile);
    },
});
const uploadFile = multer({ storage });

//array de errores
const validations=[
    body("title").notEmpty().withMessage("Este es un campo obligatorio").bail()
    .isLength({ min:5 }).withMessage("Debe tener como minimo 5 carácteres"),
    body("content").notEmpty().withMessage("Este es un campo obligatorio").bail()
    .isLength({ min:10 }).withMessage("Debe tener como minimo 10 carácteres"),
    body("price").notEmpty().withMessage("Este es un campo obligatorio").bail()
    .isNumeric().withMessage("Debe ser un número"),
    body("quantity").notEmpty().withMessage("Este es un campo obligatorio"),
    body("image").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png",".jpeg", ".gif"];
        if (!file) {
            throw new Error('Tienes que subir una imagen');
          } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
              throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`);
            }
          }
          return true;
        }),
]

adminRoutes.get("/admin", adminControllers.admin);
adminRoutes.get('/admin/create', adminControllers.create);
//adminRoutes.post("/", uploadFile.single("productImage"), adminControllers.store);
adminRoutes.post("/admin/create",uploadFile.single("image"),validations, adminControllers.createProduct);

//adminRoutes.get("/admin/edit", adminControllers.editProduct);
adminRoutes.get('/edit/:id', adminControllers.edit);
adminRoutes.post("/edit/:id",uploadFile.single("image"), adminControllers.updateProduct);
adminRoutes.post('/deleteA/:id', adminControllers.delete);
//adminRoutes.post('/edit/:id',uploadFile.single("productImage") ,adminControllers.update);



module.exports = adminRoutes;