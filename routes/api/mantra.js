const express = require('express');
const router = express.Router();
const mantraCtrl = require('../../controllers/api/mantra');


/* GET /api/mantra */
router.get('/:userId', mantraCtrl.getCurrentMantra)


/* --- Protected Routes --- */
router.use(require('../../config/auth')); /// this guy does some auth things but not the protecty ones
router.post('/', mantraCtrl.create);


/* --- Helper Functions --- */
// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }

module.exports = router;