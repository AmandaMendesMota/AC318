const express = require('express');
const router = express.Router();

const vacina = require('../controllers/vacina');

router.get('/', vacina.getVacinas);
router.post('/', vacina.createVacina);
router.get('/:id', vacina.getVacina);
router.put('/:id', vacina.editVacina);
router.delete('/:id', vacina.deleteVacina);

module.exports = router;