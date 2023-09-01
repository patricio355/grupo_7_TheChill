const express = require('express');
const productRoutes = express.Router();

const productControllers = require("../controllers/productControllers.js")

productRoutes.get('/productDetail/:id', productControllers.productDetail);
productRoutes.get('/carrito', productControllers.productCart);

module.exports = productRoutes
