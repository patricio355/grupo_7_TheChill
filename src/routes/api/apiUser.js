const express= require('express');
const router= express.Router();

const apiUser = require('../../controllers/api/apiUserController');


router.get('/users', apiUser.list);
router.get('/users/:id', apiUser.show);

module.exports= router;