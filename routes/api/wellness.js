const express = require('express');
const router = express.Router();
const wellnessCtrl = require('../../controllers/api/wellness');


/* --- Protected Routes --- */
/* GET /api/wellness */
router.use(require('../../config/auth')); /// this guy does some auth things but not the protecty ones
router.post('/', wellnessCtrl.create);
router.get('/:userId', wellnessCtrl.getCurrentWellness)
router.delete('/:userId', wellnessCtrl.delete);
router.put('/:userId', wellnessCtrl.update);


/* --- Helper Functions --- */
// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }

module.exports = router;