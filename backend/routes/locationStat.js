const express = require('express');
const router = express.Router();
const locationStatController = require('../controllers/locationStatController');
const { body } = require('express-validator');

router.get('/', locationStatController.getAllLocationStats);
router.get('/:id', locationStatController.getLocationStatById);
router.post(
  '/',
  [
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('stat_date').notEmpty().withMessage('Stat date is required'),
  ],
  locationStatController.createLocationStat
);
router.put(
  '/:id',
  [
    body('stat_date').optional().notEmpty().withMessage('Stat date cannot be empty'),
  ],
  locationStatController.updateLocationStat
);
router.delete('/:id', locationStatController.deleteLocationStat);

module.exports = router; 