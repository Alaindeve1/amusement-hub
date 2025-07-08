const { Category } = require('../models');

// Controller function to get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll(); // Fetch all categories from DB
    res.json(categories); // Send as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};