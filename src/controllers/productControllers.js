const express = require('express');
const path = require('path');
const fs = require('fs');

const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

// const productsFilePath = path.join(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsControllers = {
    createCartItem: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);

            if (!product) {
                return res.status(404).send("Product not found");
            }

            await db.Cart_Item.create({
                cartId: req.session.userLogged.cartId,
                productId: product.id,
                price: product.price,
                discount: product.discount,
                quantity: req.body.quantity,
                active: 0,
                content: product.discount,  // ¿Este campo debería ser diferente?
            });

            // Enviar una respuesta al cliente indicando que la operación fue exitosa
            res.redirect("/carrito");
        } catch (error) {
            console.error(error);
            // Enviar una respuesta al cliente indicando que hubo un error
            res.status(500).send("Internal Server Error");
        }
    },

    detail: async (req, res) => {
        try {
            const product = await db.Product.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (product) {
                res.render("../views/products/productDetail.ejs", { product, userData: req.session.userLogged });
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



    productCart: async (req, res) => {
        try {
            let cart_items = await db.Cart_Item.findAll();
            const dataValuesArray = cart_items.map(cartItem => cartItem.dataValues);
            let productItems = dataValuesArray.map(async (p) => {
                const product = await db.Product.findByPk(p.productId);
                return product;
              });              
              // Esperar a que todas las consultas a la base de datos se completen
              const resolvedProducts = await Promise.all(productItems);
            res.render(path.join(__dirname, "../views/products/productCart.ejs"), { cart_items: resolvedProducts,cart_items_add:dataValuesArray });
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
};



module.exports = productsControllers;



/*productDetail : (req,res)=>{
    const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    const id = req.params.id;
    const product = products.find((item) => item.id == id);
    console.log(products);
    console.log(product);
    res.render(path.join(__dirname,"../views/products/productDetail.ejs"),{product});
    
    
},*/