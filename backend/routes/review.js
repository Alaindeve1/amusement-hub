const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { body } = require('express-validator');
const authenticateToken = require('../middleware/authMiddleware');

// GET /api/reviews - Get all reviews
router.get('/', reviewController.getAllReviews);

// GET /api/reviews/:id - Get a single review by ID
router.get('/:id', reviewController.getReviewById);

// POST /api/reviews - Create a new review
router.post(
  '/',
  authenticateToken,
  [
    body('user_id').notEmpty().withMessage('User ID is required'),
    body('location_id').notEmpty().withMessage('Location ID is required'),
    body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be 1-5'),
    // Add more as needed
  ],
  reviewController.createReview
);

// PUT /api/reviews/:id - Update a review by ID
router.put(
  '/:id',
  authenticateToken,
  [
    body('rating').optional().isInt({ min: 1, max: 5 }).withMessage('Rating must be 1-5'),
    // Add more as needed
  ],
  reviewController.updateReview
);

// DELETE /api/reviews/:id - Delete a review by ID
router.delete('/:id', authenticateToken, reviewController.deleteReview);

module.exports = router; 