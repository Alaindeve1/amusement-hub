const express = require('express');
const router = express.Router();
const ticketTypeController = require('../controllers/ticketTypeController');
const { body } = require('express-validator');

router.get('/', ticketTypeController.getAllTicketTypes);
router.get('/:id', ticketTypeController.getTicketTypeById);
router.post(
  '/',
  [
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('name').notEmpty().withMessage('Name is required'),
    body('price').notEmpty().withMessage('Price is required'),
    body('age_group').notEmpty().withMessage('Age group is required'),
  ],
  ticketTypeController.createTicketType
);
router.put(
  '/:id',
  [
    body('name').optional().notEmpty().withMessage('Name cannot be empty'),
  ],
  ticketTypeController.updateTicketType
);
router.delete('/:id', ticketTypeController.deleteTicketType);

module.exports = router; 