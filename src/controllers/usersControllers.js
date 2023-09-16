const express = require('express');
const path = require('path');
const {validationResult} = require("express-validator");
const User = require("../models/user")

const usersControllers = {
    login: (req,res)=>{
        res.render(path.join(__dirname,"../views/users/login.ejs"));
    },
    register:(req,res)=>{
        res.render(path.join(__dirname,"../views/users/register.ejs"));
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        console.log(resultValidation);

    if (resultValidation.errors.length > 0) {
      return res.render("userRegisterForm", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    const newUser = {
      ...req.body,
      avatar: req.file.filename,
    };
    User.create(newUser);
    return res.send("Ok, se guardo el usuario");
    }
};

module.exports = usersControllers;