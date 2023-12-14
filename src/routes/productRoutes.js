const express = require('express');
const productRoutes = express.Router();
const multer = require('multer')
const path = require('path')

const productControllers = require("../controllers/productControllers.js")
const authMiddleware = require ('../middlewares/authMiddleware.js')




productRoutes.get('/productDetail/:id', productControllers.detail);
productRoutes.post('/delete/:id', productControllers.deleteDetail);
productRoutes.get('/carrito',authMiddleware, productControllers.productCart);
productRoutes.post('/carrito/test',authMiddleware, productControllers.createOrder);
productRoutes.post('/carrito/decrease/:id',authMiddleware, productControllers.decreaseCartItem);
productRoutes.post('/carrito/increase/:id',authMiddleware, productControllers.increaseCartItem);

// Funcionalidad carrito
productRoutes.post('/carrito/add/:id',authMiddleware, productControllers.createCartItem);

module.exports = productRoutes
