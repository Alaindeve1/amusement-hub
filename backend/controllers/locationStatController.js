const { LocationStat } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllLocationStats = async (req, res) => {
  try {
    const stats = await LocationStat.findAll();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getLocationStatById = async (req, res) => {
  try {
    const { id } = req.params;
    const stat = await LocationStat.findByPk(id);
    if (!stat) return res.status(404).json({ error: 'Location stat not found' });
    res.json(stat);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createLocationStat = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { location_id, stat_date } = req.body;
    const newStat = await LocationStat.create({ location_id, stat_date });
    res.status(201).json(newStat);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateLocationStat = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const stat = await LocationStat.findByPk(id);
    if (!stat) return res.status(404).json({ error: 'Location stat not found' });
    Object.keys(req.body).forEach(key => {
      stat[key] = req.body[key] ?? stat[key];
    });
    await stat.save();
    res.json(stat);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteLocationStat = async (req, res) => {
  try {
    const { id } = req.params;
    const stat = await LocationStat.findByPk(id);
    if (!stat) return res.status(404).json({ error: 'Location stat not found' });
    await stat.destroy();
    res.json({ message: 'Location stat deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 