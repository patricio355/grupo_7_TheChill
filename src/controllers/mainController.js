const express = require('express');
const path = require('path');
const fs = require('fs');

const db = require("../../database/models");


// const productsFilePath = path.join(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const mainController = {

   index: async (req, res) =>{
    let products = await db.Product.findAll()
    
    return res.render("../views/home/index.ejs",{ products , userData: req.session.userLogged, });
   }

    /*showHome: (req,res)=>{
        const productsFilePath = path.join(__dirname, "../data/products.json");
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("../views/home/index.ejs",{ products });
    }*/
}

module.exports = mainController;