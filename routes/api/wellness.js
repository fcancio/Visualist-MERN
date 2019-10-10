var express = require('express');
var router = express.Router();
var wellnessCtrl = require('../../controllers/api/wellness');

/* GET /api/wellness */
router.get('/', wellnessCtrl.index);
router.get('/:id', wellnessCtrl.show);
router.post('/', wellnessCtrl.create);
router.delete('/:id', wellnessCtrl.delete);
router.put('/:id', wellnessCtrl.update);

module.exports = router;