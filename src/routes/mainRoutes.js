const express = require("express");
const mainRoutes = express.Router();

const mainController = require("../controllers/mainController.js");

mainRoutes.get('/', mainController.showHome);

module.exports = mainRoutes;