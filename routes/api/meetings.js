const express = require('express');
const router = express.Router();
const meetingsCtrl = require('../../controllers/api/meetings');


/* GET /api/meetings */
router.get('/:userId', meetingsCtrl.getCurrentMeetings)


/* --- Protected Routes --- */
router.use(require('../../config/auth')); /// this guy does some auth things but not the protecty ones
router.post('/', meetingsCtrl.create);
router.delete('/:userId', meetingsCtrl.delete);
router.put('/:userId', meetingsCtrl.update);


/* --- Helper Functions --- */
// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }

module.exports = router;