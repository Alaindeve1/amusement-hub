const { OpeningHour } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllOpeningHours = async (req, res) => {
  try {
    const hours = await OpeningHour.findAll();
    res.json(hours);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getOpeningHourById = async (req, res) => {
  try {
    const { id } = req.params;
    const hour = await OpeningHour.findByPk(id);
    if (!hour) return res.status(404).json({ error: 'Opening hour not found' });
    res.json(hour);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createOpeningHour = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { location_id, day_of_week, opening_time, closing_time, is_closed, special_notes } = req.body;
    const newHour = await OpeningHour.create({ location_id, day_of_week, opening_time, closing_time, is_closed, special_notes });
    res.status(201).json(newHour);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateOpeningHour = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const hour = await OpeningHour.findByPk(id);
    if (!hour) return res.status(404).json({ error: 'Opening hour not found' });
    Object.keys(req.body).forEach(key => {
      hour[key] = req.body[key] ?? hour[key];
    });
    await hour.save();
    res.json(hour);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteOpeningHour = async (req, res) => {
  try {
    const { id } = req.params;
    const hour = await OpeningHour.findByPk(id);
    if (!hour) return res.status(404).json({ error: 'Opening hour not found' });
    await hour.destroy();
    res.json({ message: 'Opening hour deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 