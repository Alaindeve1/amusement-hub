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

// Controller function to get a single category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params; // Get the id from the URL
    const category = await Category.findByPk(id); // Find by primary key
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller function to update a category by ID
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params; // Get the id from the URL
    const { name, slug, description, image_url } = req.body; // Get updated data

    const category = await Category.findByPk(id); // Find the category
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Update the category fields
    category.name = name ?? category.name;
    category.slug = slug ?? category.slug;
    category.description = description ?? category.description;
    category.image_url = image_url ?? category.image_url;

    await category.save(); // Save changes to the database

    res.json(category); // Return the updated category
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller function to delete a category by ID
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params; // Get the id from the URL
    const category = await Category.findByPk(id); // Find the category
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    await category.destroy(); // Delete the category from the database

    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};