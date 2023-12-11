const fs = require("fs");
const path = require("path");
let db = require('../../database/models');

const User = {
    filename: path.join(__dirname,"../data/users.json"),
  
    generateId: function () {
      let allUsers = this.findAll();
      if (allUsers.length > 0) {
        let lastUser = allUsers.pop();
        return lastUser.id + 1;
      } else {
        return 1;
      }
    },
  
    getData: function () {
      return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
    },
    getDataByEmail: function (find) {
      return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
    },
  
    findAll: function () {
      return this.getData();
    },
    findByPk: function (id) {
      let allUsers = this.findAll();
      let userFound = allUsers.find((user) => user.id == id);
      return userFound;
    },
    findByField: function (field, text) {
      let allUsers = this.findAll();
      let userFound = allUsers.find((user) => user[field] == text);
      return userFound;
    },
    create: function (userData) {
      try{
        console.log(userData);
        db.User.create({
          first_name: userData.firstname,
          last_name: userData.lastname,
          gender: userData.gender,
          email: userData.email,
          mobile: userData.mobile,
          passwordHash: userData.password,
          avatar: userData.avatar,
          admin: false,
          registeredAt:new Date(),
        })

      }catch (error) {
        res.send(error);
      }
    },
    // create: function (userData) {
    //   let allUsers = this.findAll();
    //   let newUser = {
    //     id: this.generateId(),
    //     ...userData,
    //   };
    //   allUsers.push(newUser);
    //   fs.writeFileSync(this.filename, JSON.stringify(allUsers), null, " ");
    //   return newUser;
    // },
    delete: function (id) {
      let allUsers = this.findAll();
      let newUsers = allUsers.filter((user) => user.id != id);
      fs.writeFileSync(this.filename, JSON.stringify(newUsers), null, " ");
      return true;
    },
  };
  // User.create({name: 'lean',last:"mm"})
  // User.delete(16)
  module.exports = User;