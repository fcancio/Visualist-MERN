const express = require('express');
const router = express.Router();
const gratitudeCtrl = require('../../controllers/gratitude');

// router.get('/', gratitudeCtrl.listAll);

/* --- Protected Routes --- */
router.use(require('../../config/auth'));
router.post('/', gratitudeCtrl.create);

/* --- Helper Functions --- */
// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
// }


module.exports = router;
