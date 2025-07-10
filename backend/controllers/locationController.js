const { Location } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByPk(id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createLocation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { category_id, name, slug, description, address, city, state, country, postal_code, latitude, longitude, phone, website, email, average_rating, total_reviews, total_visitors, is_featured, is_active } = req.body;
    const newLocation = await Location.create({
      category_id, name, slug, description, address, city, state, country, postal_code, latitude, longitude, phone, website, email, average_rating, total_reviews, total_visitors, is_featured, is_active
    });
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateLocation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { id } = req.params;
    const location = await Location.findByPk(id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    // Update only provided fields
    Object.keys(req.body).forEach(key => {
      location[key] = req.body[key] ?? location[key];
    });
    await location.save();
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByPk(id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    await location.destroy();
    res.json({ message: 'Location deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
