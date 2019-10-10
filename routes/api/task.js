var express = require('express');
var router = express.Router();
var taskCtrl = require('../../controllers/api/task');

/* GET /api/task */
router.get('/', taskCtrl.index);
router.get('/:id', taskCtrl.show);
router.post('/', taskCtrl.create);
router.delete('/:id', taskCtrl.delete);
router.put('/:id', taskCtrl.update);

module.exports = router;