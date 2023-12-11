const express = require('express');
const productRoutes = express.Router();
const multer = require('multer')
const path = require('path')
const authMiddleware = require ('../middlewares/authMiddleware.js')

const productControllers = require("../controllers/productControllers.js")




productRoutes.get('/productDetail/:id', productControllers.detail);
productRoutes.post('/delete/:id', productControllers.deleteDetail);
productRoutes.get('/carrito',authMiddleware, productControllers.productCart);



module.exports = productRoutes
