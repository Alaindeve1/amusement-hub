const express = require('express');
const router = express.Router();
const userFavoriteController = require('../controllers/userFavoriteController');
const { body } = require('express-validator');

router.get('/', userFavoriteController.getAllUserFavorites);
router.get('/:id', userFavoriteController.getUserFavoriteById);
router.post(
  '/',
  [
    body('user_id').notEmpty().withMessage('User ID is required'),
    body('location_id').notEmpty().withMessage('Location ID is required'),
  ],
  userFavoriteController.createUserFavorite
);
router.put(
  '/:id',
  [
    body('user_id').optional().notEmpty().withMessage('User ID cannot be empty'),
  ],
  userFavoriteController.updateUserFavorite
);
router.delete('/:id', userFavoriteController.deleteUserFavorite);

module.exports = router; 