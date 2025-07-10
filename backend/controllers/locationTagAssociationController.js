const { LocationTagAssociation } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllLocationTagAssociations = async (req, res) => {
  try {
    const associations = await LocationTagAssociation.findAll();
    res.json(associations);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getLocationTagAssociationById = async (req, res) => {
  try {
    const { id } = req.params;
    const association = await LocationTagAssociation.findByPk(id);
    if (!association) return res.status(404).json({ error: 'Location tag association not found' });
    res.json(association);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createLocationTagAssociation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { location_id, tag_id } = req.body;
    const newAssociation = await LocationTagAssociation.create({ location_id, tag_id });
    res.status(201).json(newAssociation);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateLocationTagAssociation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const association = await LocationTagAssociation.findByPk(id);
    if (!association) return res.status(404).json({ error: 'Location tag association not found' });
    Object.keys(req.body).forEach(key => {
      association[key] = req.body[key] ?? association[key];
    });
    await association.save();
    res.json(association);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteLocationTagAssociation = async (req, res) => {
  try {
    const { id } = req.params;
    const association = await LocationTagAssociation.findByPk(id);
    if (!association) return res.status(404).json({ error: 'Location tag association not found' });
    await association.destroy();
    res.json({ message: 'Location tag association deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 