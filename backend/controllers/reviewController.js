const { Review } = require('../models');
const { validationResult } = require('express-validator');

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single review by ID
exports.getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new review
exports.createReview = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { user_id, location_id, rating, review_text, is_verified_visit, is_helpful, helpful_count, is_approved } = req.body;
    const newReview = await Review.create({
      user_id, location_id, rating, review_text, is_verified_visit, is_helpful, helpful_count, is_approved
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a review by ID
exports.updateReview = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    Object.keys(req.body).forEach(key => {
      review[key] = req.body[key] ?? review[key];
    });
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a review by ID
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    await review.destroy();
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 