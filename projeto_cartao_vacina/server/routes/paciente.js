const express = require('express');
const router = express.Router();

const paciente = require('../controllers/paciente');

//router.get('/', paciente.getPacientes);
router.post('/', paciente.createPaciente);
router.get('/:id?', paciente.getPaciente);
router.put('/:id', paciente.editPaciente);
router.delete('/:id', paciente.deletePaciente);

module.exports = router;