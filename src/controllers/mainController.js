const express = require('express');
const path = require('path');

const mainController = {
    showHome: (req,res)=>{
        res.render(path.join(__dirname,"../views/home/index.ejs"));
    }
}

module.exports = mainController;