const express = require('express');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsControllers = {
    productDetail : (req,res)=>{
        
        const id = req.params.id;
        const product = products.find((item) => item.id == id);
        console.log(product);
        res.render(path.join(__dirname,"../views/products/productDetail.ejs"),{product});
        
        
    },
    productCart : (req,res)=>{
        res.render(path.join(__dirname,"../views/products/productCart.ejs"));
    },
}

module.exports = productsControllers;


