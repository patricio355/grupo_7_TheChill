const express = require('express');
const path = require('path');
const fs = require('fs');

const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

// const productsFilePath = path.join(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsControllers = {
    createOrder:async (req,res)=>{
        try {
            console.log("ID DE CARRITO", req.session.userLogged.cartId)
            let cart_items = await db.Cart_Item.findAll({
                where: {
                    cartId: req.session.userLogged.cartId
                },
                include: [{ association: 'Product' }]
            });
            const gettedItems = cart_items.map(cartItem =>cartItem.dataValues );
            console.log("TESTTTT",gettedItems[0].Product.dataValues.price)
            const totalPrice = gettedItems.reduce((total,item) => total + (item.Product.dataValues.price*item.quantity),0);
            const TotalPriceWithDiscounts = gettedItems.reduce((total,p) => total + ((1-(p.Product.discount/100))*p.Product.price*p.quantity),0);
            console.log(totalPrice)
            // const cartGetted = await db.Cart.findOne({
            //     where: {
            //         id: req.session.userLogged.id
            //     }
            // });         
            let order = await db.Order.create({
                cartId: req.session.userLogged.cartId,
                status: 1,
                subTotal: totalPrice,
                total: TotalPriceWithDiscounts,
                itemDiscount: 0,
                tax: 0,
                shipping: 0,
                promo: null,
                discount: totalPrice-TotalPriceWithDiscounts,
                first_name: req.session.userLogged.first_name,
                middle_name: req.session.userLogged.middle_name,
                last_name: req.session.userLogged.last_name,
                mobile: req.session.userLogged.mobile,
                email: req.session.userLogged.email,
                city: "San Salvador de Jujuy",
                province: "Jujuy",
                country: "Argentina",
                content: "Mi primera compra.",  // ¿Este campo debería ser diferente?
            });

            gettedItems.forEach(async e => {
                await db.Order_Item.create({
                    orderId: order.id,
                    discount: e.Product.dataValues.discount,
                    quantity: e.quantity,
                    price: e.quantity*e.Product.dataValues.price,
                    productId: e.Product.dataValues.id,
                    content: e.Product.dataValues.content,
                });
            });

            // Vaciamos el carrito porque ya volcamos los items al Order
            await db.Cart_Item.destroy({
                where: {
                    cartId: req.session.userLogged.cartId
                }
            });
            res.redirect("/carrito");
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },
    //Muestra los elementos en el carrito
    productCart: async (req, res) => {
        try {
            console.log("ID DE CARRITO", req.session.userLogged.cartId)
            let cart_items = await db.Cart_Item.findAll({
                where: {
                    cartId: req.session.userLogged.cartId
                },
                include: [{ association: 'Product' }]
            });
    
            const dataValuesArray = cart_items.map(cartItem =>cartItem.dataValues );
    
            console.log("VALORES CARRITO", dataValuesArray);
    
            res.render(path.join(__dirname, "../views/products/productCart.ejs"), { cart_item: dataValuesArray });
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },
    createCartItem: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            const productInCart = await db.Cart_Item.findOne({
                where: {
                    productId: req.params.id,
                },
            });
            if (!product) {
                return res.status(404).send("Product not found");
            }
            if (!productInCart) {
                await db.Cart_Item.create({
                    cartId: req.session.userLogged.cartId,
                    productId: product.id,
                    price: product.price,
                    discount: product.discount,
                    quantity: 1,
                    active: 0,
                    content: product.discount,
                });
            }else{
                await productInCart.update({
                    quantity: productInCart.quantity + 1,
                });

            }
            
            
            res.redirect("/carrito");
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },
    decreaseCartItem: async (req, res) => {
        try {
            const productInCart = await db.Cart_Item.findOne({
                where: {
                    productId: req.params.id
                },
            });
    
            if (!productInCart) {
                return res.status(404).send("Product not found in the cart");
            }
    
            // Disminuir la cantidad en una unidad
            if (productInCart.quantity > 1) {
                await productInCart.update({
                    quantity: productInCart.quantity - 1,
                });
            } else {
                // Si la cantidad es 1, eliminar el producto del carrito
                await productInCart.destroy();
            }
    
            res.redirect("/carrito");
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },
    
    
    increaseCartItem: async (req, res) => {
            try {
                    const productInCart = await db.Cart_Item.findOne({
                where: {
                    productId: req.params.id,
                },
            });
    
            if (!productInCart) {
                return res.status(404).send("Product not found in the cart");
            }
    
            // Aumentar la cantidad en una unidad
            await productInCart.update({
                quantity: productInCart.quantity + 1,
            });
    
            res.redirect("/carrito");
        } catch (error) {
            console.error(error);
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