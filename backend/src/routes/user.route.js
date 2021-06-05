const {Router} = require('express');
const router = Router();

const {getUsers, register, login, forgotpassword, resetpassword} = require('../controllers/user.controller');

router.route("/")
.get(getUsers)

router.route('/registro')
.post(register)

router.route('/login')
.post(login)

router.route('/forgotpassword')
.post(forgotpassword)

router.route('/:resetToken')
.post(resetpassword)

//modelo de rutas

//router.route('/')
//.get(getUsers)
//.post(createUser);

//router.route('/:id')
//.put(updateUser)
//.delete(deleteUser);

module.exports = router;