const {Router} = require('express');
const router = Router();

const {createTicket, getTickets, getTicket, updateTicket, deleteTicket} = require('../controllers/ticket.controller');

router.route('/')
.post(createTicket)
.get(getTickets)

router.route('/:id')
.get(getTicket)
.put(updateTicket)
.delete(deleteTicket)

module.exports = router;