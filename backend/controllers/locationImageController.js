const { LocationImage } = require('../models');
const { validationResult } = require('express-validator');

// Get all location images
exports.getAllLocationImages = async (req, res) => {
  try {
    const images = await LocationImage.findAll();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single location image by ID
exports.getLocationImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await LocationImage.findByPk(id);
    if (!image) return res.status(404).json({ error: 'Location image not found' });
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new location image
exports.createLocationImage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { location_id, image_url, alt_text, display_order, is_primary } = req.body;
    const newImage = await LocationImage.create({ location_id, image_url, alt_text, display_order, is_primary });
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a location image by ID
exports.updateLocationImage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const image = await LocationImage.findByPk(id);
    if (!image) return res.status(404).json({ error: 'Location image not found' });
    Object.keys(req.body).forEach(key => {
      image[key] = req.body[key] ?? image[key];
    });
    await image.save();
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a location image by ID
exports.deleteLocationImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await LocationImage.findByPk(id);
    if (!image) return res.status(404).json({ error: 'Location image not found' });
    await image.destroy();
    res.json({ message: 'Location image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 