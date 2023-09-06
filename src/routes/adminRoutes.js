const express = require("express");
const adminRoutes = express.Router();
const multer = require('multer')
const path = require('path')

const adminControllers = require("../controllers/adminControllers.js");

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



adminRoutes.get('/admin', adminControllers.admin);
adminRoutes.get('/admin/create', adminControllers.createEdit);
adminRoutes.post("/", uploadFile.single("productImage"), adminControllers.store);


module.exports = adminRoutes;