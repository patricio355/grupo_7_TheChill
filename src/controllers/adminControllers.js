const express = require('express');
const path = require('path');
const fs = require('fs');

const db = require("../../database/models");

const { Result } = require('express-validator');
const { error } = require('console');
const Product = require('../../database/models/Product');

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//requerir metodo de express-validator
const{validationResult}=require("express-validator");
//

const adminControllers = {
    /*admin: (req, res) => {
        const productsFilePath = path.join(__dirname, "../data/products.json");
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("../views/admin/admin.ejs",{ products });
    },*/

    admin: (req, res) =>{
        db.Product.findAll({ raw:true}).then((result) =>{
            res.render("../views/admin/admin.ejs",{ products:result });
        })
        .catch((error)=> res.send(error));
       },


    /*createEdit: (req, res) => {
        res.render(path.join(__dirname, "../views/admin/createProduct.ejs"));
    },*/

    create: (req, res) =>{
            db.Product.findAll({ raw:true}).then((result)=>{
                res.render("../views/admin/createProduct.ejs",{products:result});
            })
        },


    createProduct: async (req, res) => {
        
        //lo de express-validator
        const resultValidation=validationResult(req);
        if(resultValidation.errors.length > 0){
            res.render(path.join(__dirname,"../views/admin/createProduct.ejs"),{
                errors:resultValidation.mapped(),
                oldData: req.body,
             
            });
        }else{


        let productImage;
        if (req.file) {
            productImage = req.file.filename;
        } else {
            productImage = "producto.png";
        }
    
        let newProduct = req.body;
    
        try {
            const createdProduct = await db.Product.create({
                title: newProduct.title,
                image: productImage,
                size: newProduct.size,
                content: newProduct.content,
                price: newProduct.price,
                brand: newProduct.brand,
                colour: newProduct.colour,
                gender: newProduct.gender,
                category: newProduct.category,
                type: newProduct.type,
                model_name: newProduct.model_name,
                quantity: newProduct.quantity,
                discount: newProduct.discount
            });

            res.redirect("/");
        } 
            catch (error) {
            res.send(error);
        } 
        }
    },


    // Create -  Method to store
    /*store: (req, res) => {
        // Do the magic
        const data = req.body;
        const index = products[products.length - 1].id;
        const newProduct = {
            id: index + 1,
            name: data.name,
            image: req.file.filename,
            size: data.size,
            description: data.description,
            price: parseInt(data.price),
            brand: data.brand,
            color: data.color,
            gender: data.gender,
            category: data.category,
            model_name: data.model_name,
            stock: parseInt(data.stock),
            discount: parseInt(data.discount),
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect("/");
    },*/
    /*destroy: (req, res) => {
        const id = req.params.id;
        const leftProducts = products.filter((product) => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(leftProducts));
        res.redirect("/");
    },
    destroyAdmin: (req, res) => {
        const id = req.params.id;
        console.log(id)
        const leftProducts = products.filter((product) => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(leftProducts));
        res.redirect("/admin");
    },*/

    /*edit: (req, res) => {
        const id = req.params.id;
        const product = products.find((product) => product.id == id);
        res.render(path.join(__dirname, "../views/admin/editProduct.ejs"), { productToEdit: product });
    },*/

    edit: (req, res) => {
        const id = req.params.id;
        db.Product.findByPk(id, {raw:true})
        .then((result) => {
            res.render("../views/admin/editProduct.ejs", { productToEdit: result });
        })
        .catch((error) => res.send(error));
    },

    updateProduct: async (req, res) => {


        const resultValidation=validationResult(req);
        if(resultValidation.errors.length > 0){
            const id = req.params.id;
            db.Product.findByPk(id, {raw:true})
        .then((result) => {
            const mergedData = {
                ...result,
                ...req.body,
            };
            res.render(path.join(__dirname,"../views/admin/editProduct.ejs"),{
                
                
                errors:resultValidation.mapped(),
                oldData: req.body,
                productToEdit : mergedData,
                
            });
        })
        }else{






        const productId = req.params.id;
       // const productImage = req.file ? req.file.filename : "producto.png"; 
       console.log(req.body);
       let productImage;
       if (req.file) {
           productImage = req.file.filename;
       } else {
           productImage = productId.image;
       }

       
        try {
            const editedProduct = await db.Product.update({
                title: req.body.title,
                image: productImage,
                size: req.body.size,
                content: req.body.content,
                price: req.body.price,
                brand: req.body.brand,
                colour: req.body.colour,
                gender: req.body.gender,
                type: req.body.type,
                model_name: req.body.model_name,
                quantity: req.body.quantity,
                discount: req.body.discount,
                category: req.body.category
                
            }, {
                where: {
                    id: productId,
                },
            });
    
            res.redirect("/");
        } catch (error) {
            console.log(error);
            res.send("Error al actualizar el producto");
        }
        
    }},
    
    
    

    delete: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((result) => res.redirect("/admin"))
        .catch((error) => console.log(error));
    },

    /*update: (req, res) => {
        // Do the magic
        const id = req.params.id;
        const editProduct = req.body;
        const index = products.findIndex((product) => product.id == id);
        //console.log(editProduct);
        products[index].price = editProduct.price;
        products[index].name = editProduct.name;
        products[index].discount = editProduct.discount;
        products[index].category = !editProduct.category
            ? products[index].category
            : editProduct.category;
        products[index].description = editProduct.description;
        products[index].brand = editProduct.brand;
        products[index].model_name = editProduct.model_name;
        products[index].size = editProduct.size;
        products[index].color = editProduct.color;
        products[index].stock = editProduct.stock;
        products[index].gender = editProduct.gender;
        if (req.file && req.file.filename) {
            products[index].image = req.file.filename;
        }
    
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect("/");
    },*/
}



module.exports = adminControllers;