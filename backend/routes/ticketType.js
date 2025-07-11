// Ticketing routes are disabled for now to focus on core features.
// const express = require('express');
// const router = express.Router();
// const { body } = require('express-validator');
// const ticketTypeController = require('../controllers/ticketTypeController');

// // GET /api/ticket-types - Get all ticket types
// router.get('/', ticketTypeController.getAllTicketTypes);

// // GET /api/ticket-types/:id - Get a single ticket type by ID
// router.get('/:id', ticketTypeController.getTicketTypeById);

// // POST /api/ticket-types - Create a new ticket type
// router.post(
//   '/',
//   [
//     body('name').notEmpty().withMessage('Name is required'),
//     body('price').isNumeric().withMessage('Price must be a number'),
//   ],
//   ticketTypeController.createTicketType
// );

// // PUT /api/ticket-types/:id - Update a ticket type by ID
// router.put(
//   '/:id',
//   [
//     body('name').optional().notEmpty().withMessage('Name cannot be empty'),
//     body('price').optional().isNumeric().withMessage('Price must be a number'),
//   ],
//   ticketTypeController.updateTicketType
// );

// // DELETE /api/ticket-types/:id - Delete a ticket type by ID
// router.delete('/:id', ticketTypeController.deleteTicketType);

// module.exports = router; 