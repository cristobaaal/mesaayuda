const {Router} = require('express');
const router = Router();
const {getPrivateData} = require('../controllers/private')
const {protect} = require('../middlewares/auth');

router.route("/").get(protect, getPrivateData);

module.exports = router;