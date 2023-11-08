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



adminRoutes.get("/admin", adminControllers.admin);
adminRoutes.get('/admin/create', adminControllers.createProduct);
//adminRoutes.post("/", uploadFile.single("productImage"), adminControllers.store);
adminRoutes.post("/admin/create",uploadFile.single("productImage"), adminControllers.createProductDB);

adminRoutes.get("/admin/edit", adminControllers.editProduct);
adminRoutes.post("/edit/:id", adminControllers.editProductDB);
//adminRoutes.post('/delete/:id', adminControllers.destroy);
//adminRoutes.post('/deleteA/:id', adminControllers.destroyAdmin);
//adminRoutes.get('/edit/:id', adminControllers.edit);
//adminRoutes.post('/edit/:id',uploadFile.single("productImage") ,adminControllers.update);



module.exports = adminRoutes;