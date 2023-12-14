const express= require('express');
const router= express.Router();

const apiCategory = require('../../controllers/api/apiCategoryController');


router.get('/categoria', apiCategory.list);

module.exports= router;