const express = require('express');
const router = express.Router();
const gratitudeCtrl = require('../../controllers/gratitude');
const { checkAuth } = require('../utilities');

/* GET /api/gratitude */
router.get('/:userId', gratitudeCtrl.getCurrentGratitude)


/* --- Protected Routes --- */
router.use(require('../../config/auth')); /// this guy does some auth things but not the protecty ones
router.post('/', checkAuth, gratitudeCtrl.create);
// router.put('/:userId', gratitudeCtrl.update);


module.exports = router;