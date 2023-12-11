const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController.js');

//Rutas
//Listado de todos los usuarios
router.get('/', userAPIController.list);
//Detalle del actor
router.get('/:id', userAPIController.detail);
//En que peliculas trabajo el actor con id tal
router.get('/:id/movies', userAPIController.actorMovies);

//Agregar un usuario
router.post('/create', userAPIController.create);
//Modificar un usuario
router.put('/update/:id', userAPIController.update);
//Eliminar un usuario
router.delete('/delete/:id', userAPIController.destroy);

module.exports = router;