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

// Controller function to create a new category
exports.createCategory = async (req, res) => {
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