const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const { body } = require('express-validator');
const { validationResult } = require('express-validator');

router.get('/', locationController.getAllLocations);
router.get('/:id', locationController.getLocationById);

// POST /api/locations
router.post(
  '/',
  [
    body('category_id').notEmpty().withMessage('Category ID is required'),
    body('name').notEmpty().withMessage('Name is required'),
    body('slug').notEmpty().withMessage('Slug is required'),
    // Add more as needed
  ],
  locationController.createLocation
);

// PUT /api/locations/:id
router.put(
  '/:id',
  [
    body('name').optional().notEmpty().withMessage('Name cannot be empty'),
    body('slug').optional().notEmpty().withMessage('Slug cannot be empty'),
    // Add more as needed
  ],
  locationController.updateLocation
);

router.delete('/:id', locationController.deleteLocation);

module.exports = router;