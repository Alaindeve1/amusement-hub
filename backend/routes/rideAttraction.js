const express = require('express');
const router = express.Router();
const rideAttractionController = require('../controllers/rideAttractionController');
const { body } = require('express-validator');

router.get('/', rideAttractionController.getAllRideAttractions);
router.get('/:id', rideAttractionController.getRideAttractionById);
router.post(
  '/',
  [
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('ride_name').notEmpty().withMessage('Ride name is required'),
  ],
  rideAttractionController.createRideAttraction
);
router.put(
  '/:id',
  [
    body('ride_name').optional().notEmpty().withMessage('Ride name cannot be empty'),
  ],
  rideAttractionController.updateRideAttraction
);
router.delete('/:id', rideAttractionController.deleteRideAttraction);

module.exports = router; 