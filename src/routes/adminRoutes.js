const express = require("express");
const adminRoutes = express.Router();

const adminControllers = require("../controllers/adminControllers.js");

adminRoutes.get('/admin', adminControllers.admin);
adminRoutes.get('/admin/create', adminControllers.createEdit);

module.exports = adminRoutes;