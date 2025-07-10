const express = require('express');
const router = express.Router();
const openingHourController = require('../controllers/openingHourController');
const { body } = require('express-validator');

router.get('/', openingHourController.getAllOpeningHours);
router.get('/:id', openingHourController.getOpeningHourById);
router.post(
  '/',
  [
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('day_of_week').isInt({ min: 0, max: 6 }).withMessage('Day of week must be 0-6'),
  ],
  openingHourController.createOpeningHour
);
router.put(
  '/:id',
  [
    body('day_of_week').optional().isInt({ min: 0, max: 6 }).withMessage('Day of week must be 0-6'),
  ],
  openingHourController.updateOpeningHour
);
router.delete('/:id', openingHourController.deleteOpeningHour);

module.exports = router; 