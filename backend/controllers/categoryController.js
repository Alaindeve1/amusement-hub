const { Category } = require('../models');
const { validationResult } = require('express-validator'); // Import validationResult

// Controller function to get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll(); // Fetch all categories from DB
    res.json(categories); // Send as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller function to create a new category
exports.createCategory = async (req, res) => {
  // Check for validation errors from express-validator
  const errors = validationResult(req); // Collects errors from validation middleware
  if (!errors.isEmpty()) {
    // If there are errors, return 400 with error details
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, slug, description, image_url } = req.body; // Get data from request body

    // Create a new category in the database
    const newCategory = await Category.create({
      name,
      slug,
      description,
      image_url
    });

    res.status(201).json(newCategory); // Send the new category as JSON with status 201 (Created)
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};