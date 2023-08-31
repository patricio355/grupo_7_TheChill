const express = require('express');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {
    showHome: (req,res)=>{
        res.render(path.join(__dirname,"../views/home/index.ejs"),{ products });
    }
}

module.exports = mainController;