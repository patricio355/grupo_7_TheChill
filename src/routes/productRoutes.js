const express = require('express');
const productRoutes = express.Router();
const multer = require('multer')
const path = require('path')

const productControllers = require("../controllers/productControllers.js")




productRoutes.get('/productDetail/:id', productControllers.detail);
productRoutes.post('/delete/:id', productControllers.deleteDetail);
productRoutes.get('/carrito', productControllers.productCart);



module.exports = productRoutes
