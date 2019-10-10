const express = require('express');
const router = express.Router();
const gratitudeCtrl = require('../../controllers/gratitude');


/* GET /api/gratitude */
router.get('/:userId', gratitudeCtrl.getCurrentGratitude)


/* --- Protected Routes --- */
router.use(require('../../config/auth')); /// this guy does some auth things but not the protecty ones
router.post('/', gratitudeCtrl.create);


/* --- Helper Functions --- */
// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }

module.exports = router;
