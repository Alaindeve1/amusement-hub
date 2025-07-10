const express = require('express');
const router = express.Router();
const rideWaitTimeController = require('../controllers/rideWaitTimeController');
const { body } = require('express-validator');

router.get('/', rideWaitTimeController.getAllRideWaitTimes);
router.get('/:id', rideWaitTimeController.getRideWaitTimeById);
router.post(
  '/',
  [
    body('ride_id').notEmpty().withMessage('Ride ID is required'),
    body('current_wait_time').notEmpty().withMessage('Current wait time is required'),
    body('status').notEmpty().withMessage('Status is required'),
    body('recorded_at').notEmpty().withMessage('Recorded at is required'),
  ],
  rideWaitTimeController.createRideWaitTime
);
router.put(
  '/:id',
  [
    body('current_wait_time').optional().notEmpty().withMessage('Current wait time cannot be empty'),
  ],
  rideWaitTimeController.updateRideWaitTime
);
router.delete('/:id', rideWaitTimeController.deleteRideWaitTime);

module.exports = router; 