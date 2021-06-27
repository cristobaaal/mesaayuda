const {Router} = require('express');
const router = Router();

const {createTicket, getTickets, getTicket, updateState, getFilterTickets, deleteTicket} = require('../controllers/ticket.controller');

router.route('/')
.post(createTicket)
.get(getTickets)

router.route('/:id')
.get(getTicket)
.delete(deleteTicket)

router.route('/updateState/:id')
.put(updateState)

router.route('/api/filterTickets')
.post(getFilterTickets)

module.exports = router;