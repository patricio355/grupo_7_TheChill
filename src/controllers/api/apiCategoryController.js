const path = require('path');
const db = require('../../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");



const actorsAPIController = {
    'list': async (req,res) => {
        const data = await db.Category.findAll();
        
        res.json({
            code: 200,
            total: data.length,
            categorias: data
        });
       
    },
    
}

module.exports = actorsAPIController;