const express = require('express');
const router = express.Router();
const taskCtrl = require('../../controllers/api/task');


/* --- Protected Routes --- */
/* GET /api/task */
router.use(require('../../config/auth')); /// this guy does some auth things but not the protecty ones
router.post('/', taskCtrl.create);
router.get('/:userId', taskCtrl.show)
router.delete('/:userId', taskCtrl.delete);
router.put('/:userId', taskCtrl.update);


/* --- Helper Functions --- */
// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }

module.exports = router;