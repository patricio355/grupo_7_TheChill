const express = require("express");
const mainRoutes = express.Router();

const mainController = require("../controllers/mainController.js");

mainRoutes.get('/', mainController.index);

mainRoutes.get('/resultadoBusq', mainController.busqueda);
module.exports = mainRoutes;