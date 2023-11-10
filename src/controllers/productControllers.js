const express = require('express');
const path = require('path');
const fs = require('fs');

const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

// const productsFilePath = path.join(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsControllers = {
    /*productDetail : (req,res)=>{
        const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const id = req.params.id;
        const product = products.find((item) => item.id == id);
        console.log(products);
        console.log(product);
        res.render(path.join(__dirname,"../views/products/productDetail.ejs"),{product});
        
        
    },*/

    detail: async (req, res) => {
        try {
            const product = await db.Product.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (product) {
                res.render("../views/products/productDetail.ejs", { product });
            } else {
                res.send('Producto no encontrado');
            }
        } catch (error) {
            res.send(error);
        }
    },

    

    deleteDetail: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((result) => res.redirect("/"))
        .catch((error) => console.log(error));
    },



    productCart : (req,res)=>{
        res.render(path.join(__dirname,"../views/products/productCart.ejs"));
    }
};



module.exports = productsControllers;


