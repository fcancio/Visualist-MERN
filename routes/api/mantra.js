var express = require('express');
var router = express.Router();
var mantraCtrl = require('../../controllers/api/mantra');

/* GET /api/mantra */
router.get('/', mantraCtrl.index);
router.get('/:id', mantraCtrl.show);
router.post('/', mantraCtrl.create);
router.delete('/:id', mantraCtrl.delete);
router.put('/:id', mantraCtrl.update);

module.exports = router;