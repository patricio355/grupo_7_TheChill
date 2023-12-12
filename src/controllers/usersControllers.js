const express = require('express');
const path = require('path');
const session = require("express-session");
const {validationResult} = require("express-validator");
const bcryptjs = require('bcryptjs');
const User = require("../models/user");
const exp = require('constants');
let db = require('../../database/models');


const usersControllers = {
    register:(req,res)=>{
        res.render(path.join(__dirname,"../views/users/register.ejs"));
    },
    processRegister: (req, res) => {
      const resultValidation = validationResult(req);
    
      if (resultValidation.errors.length > 0) {
        return res.render(path.join(__dirname, "../views/users/register.ejs"), {
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      }
    
      db.User.findOne({
        where: {
          email: req.body.email,
        },
      }).then((userFound) => {
        if (userFound) {
          return res.render(path.join(__dirname, "../views/users/register.ejs"), {
            errors: {
              email: {
                msg: "Este email ya está registrado",
              },
            },
            oldData: req.body,
          });
        }
    
        const newUser = {
          ...req.body,
          password: bcryptjs.hashSync(req.body.password,10),
          avatar: req.file ? req.file.filename : 'avatar.jpg',
        };
        delete newUser.confirmedPass;
        // console.log(newUser);
        User.create(newUser);
        })
        return res.redirect("/login");
    },    
    login: (req,res)=>{
        res.render(path.join(__dirname,"../views/users/login.ejs"));
    },
    loginProcess: (req,res)=>{
      const userToLogin = req.body;
      const userFound =  db.User.findOne({
        where: {
            email: req.body.email
        }
      }).then(userFound=>{
        
      if (userFound){
        const okPassword = bcryptjs.compareSync(userToLogin.password, userFound.passwordHash )
          if(okPassword){
            delete userFound.dataValues.password;
            delete userFound.dataValues.passwordHash;
            req.session.userLogged = userFound.dataValues;
            res.cookie("userEmail",req.session.userLogged,{maxAge:(1000*60)*5});
            // console.log(req.session);
            res.redirect("/");
          }else{
            res.render(path.join(__dirname,"../views/users/login.ejs"), {
              errors:{
                password:{
                  msg: "Usuario y/o contraseña incorrectos"
                }
              }
            })
          }
      }else{
            res.render(path.join(__dirname,"../views/users/login.ejs"), {
            errors:{
                email:{
                  msg: "Este correo no figura en el sistema",
                },
              },
          });
        }
      })
    },
    profile: (req, res)=>{
      console.log (req.session.userLogged.avatar)
        const id = req.params.id;
        db.User.findByPk(id, {raw:true})
        .then((result) => {
            res.render(path.join(__dirname,"../views/users/profile.ejs")
      ,{
        userData: req.session.userLogged,
         userToEdit: result 
         
      }
      
        )})
        .catch((error) => res.send(error));
    } ,


    logOut: (req, res)=>{
      req.session.destroy();
      console.log("se destruyo la session");
      res.clearCookie("userEmail");
      res.redirect("/");
    },


  

  updateUser: async (req, res) => {
      const userId = req.params.id;
     // me falta agregar validacion y un par de correcciones mas
      try {
          const editedProduct = await db.User.update({	

              first_name: req.body.first_name,
              last_name	: req.body.last_name,
              email: req.body.email,
              gender: req.body.gender,
             
          }, {
              where: {
                  id: userId,
              },
          });
          
          res.redirect("/profile/" + userId );
      } catch (error) {
          console.log(error);
          res.send("Error");
      }
      
  }







};

module.exports = usersControllers;