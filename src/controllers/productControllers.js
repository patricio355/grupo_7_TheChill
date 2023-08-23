const express = require('express');
const path = require('path');

const productsControllers = {
    productDetail : (req,res)=>{
        res.render(path.join(__dirname,"../views/products/productDetail.ejs"));
    },
    productCart : (req,res)=>{
        res.render(path.join(__dirname,"../views/products/productCart.ejs"));
    },
}

module.exports = productsControllers;


