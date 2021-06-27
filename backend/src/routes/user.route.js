const {Router} = require('express');
const router = Router();

const {getUsers, register, getUser, removeTicketFromArray, login, forgotpassword, resetpassword} = require('../controllers/user.controller');

router.route("/")
.get(getUsers)

router.route("/:id")
.get(getUser)

router.route('/registro')
.post(register)

router.route('/login')
.post(login)

router.route('/:id')
.put(removeTicketFromArray)

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