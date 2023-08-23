const express = require('express');
const path = require('path');

const adminControllers = {
    admin: (req,res)=>{
        res.render(path.join(__dirname,"../views/admin/admin.ejs"));
    },
    createEdit: (req,res)=>{
        res.render(path.join(__dirname,"../views/admin/createProduct.ejs"));
    }
}

module.exports = adminControllers;