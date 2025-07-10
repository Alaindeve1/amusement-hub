const { RideAttraction } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllRideAttractions = async (req, res) => {
  try {
    const rides = await RideAttraction.findAll();
    res.json(rides);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getRideAttractionById = async (req, res) => {
  try {
    const { id } = req.params;
    const ride = await RideAttraction.findByPk(id);
    if (!ride) return res.status(404).json({ error: 'Ride attraction not found' });
    res.json(ride);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createRideAttraction = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { location_id, ride_name } = req.body;
    const newRide = await RideAttraction.create({ location_id, ride_name });
    res.status(201).json(newRide);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateRideAttraction = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const ride = await RideAttraction.findByPk(id);
    if (!ride) return res.status(404).json({ error: 'Ride attraction not found' });
    Object.keys(req.body).forEach(key => {
      ride[key] = req.body[key] ?? ride[key];
    });
    await ride.save();
    res.json(ride);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteRideAttraction = async (req, res) => {
  try {
    const { id } = req.params;
    const ride = await RideAttraction.findByPk(id);
    if (!ride) return res.status(404).json({ error: 'Ride attraction not found' });
    await ride.destroy();
    res.json({ message: 'Ride attraction deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 