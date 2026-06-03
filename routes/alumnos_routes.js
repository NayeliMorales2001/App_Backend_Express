const express = require('express');
const router = express.Router();

const alumno_controller = require('../controller/alumnoController');

// ALTAS
router.post('/', alumno_controller.create);

// BAJAS
router.post('/eliminar/:id', alumno_controller.delete);

// EDITAR 
router.put('/:id', alumno_controller.update);

// LISTAR
router.get('/', alumno_controller.findAll);

// BUSCAR
router.get('/buscar', alumno_controller.search);

// CONSULTAR POR ID
router.get('/:id', alumno_controller.findById);

module.exports = router;