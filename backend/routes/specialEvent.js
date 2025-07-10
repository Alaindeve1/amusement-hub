const express = require('express');
const router = express.Router();
const specialEventController = require('../controllers/specialEventController');
const { body } = require('express-validator');

router.get('/', specialEventController.getAllSpecialEvents);
router.get('/:id', specialEventController.getSpecialEventById);
router.post(
  '/',
  [
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('event_name').notEmpty().withMessage('Event name is required'),
    body('start_date').notEmpty().withMessage('Start date is required'),
    body('end_date').notEmpty().withMessage('End date is required'),
  ],
  specialEventController.createSpecialEvent
);
router.put(
  '/:id',
  [
    body('event_name').optional().notEmpty().withMessage('Event name cannot be empty'),
  ],
  specialEventController.updateSpecialEvent
);
router.delete('/:id', specialEventController.deleteSpecialEvent);

module.exports = router; 