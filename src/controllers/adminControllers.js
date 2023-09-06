const express = require('express');
const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const adminControllers = {
    admin: (req, res) => {
        res.render(path.join(__dirname, "../views/admin/admin.ejs"));
    },
    createEdit: (req, res) => {
        res.render(path.join(__dirname, "../views/admin/createProduct.ejs"));
    },
    // Create -  Method to store
    store: (req, res) => {
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
    },
}

module.exports = adminControllers;