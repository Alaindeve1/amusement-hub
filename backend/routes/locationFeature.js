const express = require('express');
const router = express.Router();
const locationFeatureController = require('../controllers/locationFeatureController');
const { body } = require('express-validator');

router.get('/', locationFeatureController.getAllLocationFeatures);
router.get('/:id', locationFeatureController.getLocationFeatureById);
router.post(
  '/',
  [
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('feature_name').notEmpty().withMessage('Feature name is required'),
  ],
  locationFeatureController.createLocationFeature
);
router.put(
  '/:id',
  [
    body('feature_name').optional().notEmpty().withMessage('Feature name cannot be empty'),
  ],
  locationFeatureController.updateLocationFeature
);
router.delete('/:id', locationFeatureController.deleteLocationFeature);

module.exports = router; 