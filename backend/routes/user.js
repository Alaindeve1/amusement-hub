const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');

// GET /api/users - Get all users
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Get a single user by ID
router.get('/:id', userController.getUserById);

// POST /api/users - Create a new user
router.post(
  '/',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('username').notEmpty().withMessage('Username is required'),
    body('password_hash').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    // Add more as needed
  ],
  userController.createUser
);

// PUT /api/users/:id - Update a user by ID
router.put(
  '/:id',
  [
    body('email').optional().isEmail().withMessage('Valid email is required'),
    body('username').optional().notEmpty().withMessage('Username cannot be empty'),
    // Add more as needed
  ],
  userController.updateUser
);

// DELETE /api/users/:id - Delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router; 