const express = require('express');
const router = express.Router();
const bookingTicketController = require('../controllers/bookingTicketController');
const { body } = require('express-validator');

router.get('/', bookingTicketController.getAllBookingTickets);
router.get('/:id', bookingTicketController.getBookingTicketById);
router.post(
  '/',
  [
    body('booking_id').notEmpty().withMessage('Booking ID is required'),
    body('ticket_type_id').notEmpty().withMessage('Ticket type ID is required'),
    body('quantity').notEmpty().withMessage('Quantity is required'),
    body('unit_price').notEmpty().withMessage('Unit price is required'),
    body('total_price').notEmpty().withMessage('Total price is required'),
  ],
  bookingTicketController.createBookingTicket
);
router.put(
  '/:id',
  [
    body('quantity').optional().notEmpty().withMessage('Quantity cannot be empty'),
  ],
  bookingTicketController.updateBookingTicket
);
router.delete('/:id', bookingTicketController.deleteBookingTicket);

module.exports = router; 