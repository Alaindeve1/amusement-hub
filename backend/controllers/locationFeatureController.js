const { LocationFeature } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllLocationFeatures = async (req, res) => {
  try {
    const features = await LocationFeature.findAll();
    res.json(features);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getLocationFeatureById = async (req, res) => {
  try {
    const { id } = req.params;
    const feature = await LocationFeature.findByPk(id);
    if (!feature) return res.status(404).json({ error: 'Location feature not found' });
    res.json(feature);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createLocationFeature = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { location_id, feature_name, description, icon_url, display_order } = req.body;
    const newFeature = await LocationFeature.create({ location_id, feature_name, description, icon_url, display_order });
    res.status(201).json(newFeature);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateLocationFeature = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const feature = await LocationFeature.findByPk(id);
    if (!feature) return res.status(404).json({ error: 'Location feature not found' });
    Object.keys(req.body).forEach(key => {
      feature[key] = req.body[key] ?? feature[key];
    });
    await feature.save();
    res.json(feature);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteLocationFeature = async (req, res) => {
  try {
    const { id } = req.params;
    const feature = await LocationFeature.findByPk(id);
    if (!feature) return res.status(404).json({ error: 'Location feature not found' });
    await feature.destroy();
    res.json({ message: 'Location feature deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 