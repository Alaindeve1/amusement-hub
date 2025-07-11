const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const locationImageController = require('../controllers/locationImageController');
const authenticateToken = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

// GET /api/location-images - Get all location images
router.get('/', locationImageController.getAllLocationImages);

// GET /api/location-images/:id - Get a single location image by ID
router.get('/:id', locationImageController.getLocationImageById);

// POST /api/location-images - Create a new location image (admin or moderator only)
router.post(
  '/',
  authenticateToken,
  authorizeRoles('admin', 'moderator'),
  [
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('image_url').notEmpty().withMessage('Image URL is required'),
  ],
  locationImageController.createLocationImage
);

// PUT /api/location-images/:id - Update a location image by ID (admin or moderator only)
router.put(
  '/:id',
  authenticateToken,
  authorizeRoles('admin', 'moderator'),
  [
    body('image_url').optional().notEmpty().withMessage('Image URL cannot be empty'),
  ],
  locationImageController.updateLocationImage
);

// DELETE /api/location-images/:id - Delete a location image by ID (admin or moderator only)
router.delete(
  '/:id',
  authenticateToken,
  authorizeRoles('admin', 'moderator'),
  locationImageController.deleteLocationImage
);

module.exports = router; 