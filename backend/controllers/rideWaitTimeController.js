const { RideWaitTime } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllRideWaitTimes = async (req, res) => {
  try {
    const waits = await RideWaitTime.findAll();
    res.json(waits);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getRideWaitTimeById = async (req, res) => {
  try {
    const { id } = req.params;
    const wait = await RideWaitTime.findByPk(id);
    if (!wait) return res.status(404).json({ error: 'Ride wait time not found' });
    res.json(wait);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createRideWaitTime = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { ride_id, current_wait_time, status, recorded_at } = req.body;
    const newWait = await RideWaitTime.create({ ride_id, current_wait_time, status, recorded_at });
    res.status(201).json(newWait);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateRideWaitTime = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const wait = await RideWaitTime.findByPk(id);
    if (!wait) return res.status(404).json({ error: 'Ride wait time not found' });
    Object.keys(req.body).forEach(key => {
      wait[key] = req.body[key] ?? wait[key];
    });
    await wait.save();
    res.json(wait);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteRideWaitTime = async (req, res) => {
  try {
    const { id } = req.params;
    const wait = await RideWaitTime.findByPk(id);
    if (!wait) return res.status(404).json({ error: 'Ride wait time not found' });
    await wait.destroy();
    res.json({ message: 'Ride wait time deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 