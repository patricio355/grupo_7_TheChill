const express = require('express');
const path = require('path');
const fs = require('fs');





// const productsFilePath = path.join(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {

   

    showHome: (req,res)=>{
        const productsFilePath = path.join(__dirname, "../data/products.json");
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("../views/home/index.ejs",{ products });
    }
}

module.exports = mainController;