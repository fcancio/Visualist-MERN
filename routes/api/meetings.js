var express = require('express');
var router = express.Router();
var meetingsCtrl = require('../../controllers/api/meetings');

/* GET /api/meetings */
router.get('/', meetingsCtrl.index);
router.get('/:id', meetingsCtrl.show);
router.post('/', meetingsCtrl.create);
router.delete('/:id', meetingsCtrl.delete);
router.put('/:id', meetingsCtrl.update);

module.exports = router;