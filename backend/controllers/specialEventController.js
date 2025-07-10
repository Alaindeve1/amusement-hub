const { SpecialEvent } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllSpecialEvents = async (req, res) => {
  try {
    const events = await SpecialEvent.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getSpecialEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await SpecialEvent.findByPk(id);
    if (!event) return res.status(404).json({ error: 'Special event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createSpecialEvent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { location_id, event_name, start_date, end_date } = req.body;
    const newEvent = await SpecialEvent.create({ location_id, event_name, start_date, end_date });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateSpecialEvent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const event = await SpecialEvent.findByPk(id);
    if (!event) return res.status(404).json({ error: 'Special event not found' });
    Object.keys(req.body).forEach(key => {
      event[key] = req.body[key] ?? event[key];
    });
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteSpecialEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await SpecialEvent.findByPk(id);
    if (!event) return res.status(404).json({ error: 'Special event not found' });
    await event.destroy();
    res.json({ message: 'Special event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 