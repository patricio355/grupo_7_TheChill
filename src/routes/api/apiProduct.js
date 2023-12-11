const express = require('express');
const router = express.Router();
const productAPIController = require('../../controllers/api/productAPIController.js');

//Rutas
//Listado de todos los productos
router.get('/all', productAPIController.list);
//Detalle del producto
// router.get('/:id', productAPIController.detail);
// //En que peliculas trabajo el actor con id tal
// router.get('/:id/movies', productAPIController.actorMovies);

// //Agregar un usuario
// router.post('/create', productAPIController.create);
// //Modificar un usuario
// router.put('/update/:id', productAPIController.update);
// //Eliminar un usuario
// router.delete('/delete/:id', productAPIController.destroy);

module.exports = router;