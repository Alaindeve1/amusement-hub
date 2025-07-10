const { LocationTag } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllLocationTags = async (req, res) => {
  try {
    const tags = await LocationTag.findAll();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getLocationTagById = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await LocationTag.findByPk(id);
    if (!tag) return res.status(404).json({ error: 'Location tag not found' });
    res.json(tag);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createLocationTag = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { tag_name } = req.body;
    const newTag = await LocationTag.create({ tag_name });
    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateLocationTag = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const tag = await LocationTag.findByPk(id);
    if (!tag) return res.status(404).json({ error: 'Location tag not found' });
    Object.keys(req.body).forEach(key => {
      tag[key] = req.body[key] ?? tag[key];
    });
    await tag.save();
    res.json(tag);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteLocationTag = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await LocationTag.findByPk(id);
    if (!tag) return res.status(404).json({ error: 'Location tag not found' });
    await tag.destroy();
    res.json({ message: 'Location tag deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 