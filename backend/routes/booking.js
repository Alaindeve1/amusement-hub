const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { body } = require('express-validator');

router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.post(
  '/',
  [
    body('user_id').notEmpty().withMessage('User ID is required'),
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('booking_reference').notEmpty().withMessage('Booking reference is required'),
    body('visit_date').notEmpty().withMessage('Visit date is required'),
    body('total_amount').notEmpty().withMessage('Total amount is required'),
  ],
  bookingController.createBooking
);
router.put(
  '/:id',
  [
    body('booking_reference').optional().notEmpty().withMessage('Booking reference cannot be empty'),
  ],
  bookingController.updateBooking
);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router; 