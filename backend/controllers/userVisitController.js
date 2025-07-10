const { UserVisit } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllUserVisits = async (req, res) => {
  try {
    const visits = await UserVisit.findAll();
    res.json(visits);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getUserVisitById = async (req, res) => {
  try {
    const { id } = req.params;
    const visit = await UserVisit.findByPk(id);
    if (!visit) return res.status(404).json({ error: 'User visit not found' });
    res.json(visit);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createUserVisit = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { user_id, location_id, visit_date } = req.body;
    const newVisit = await UserVisit.create({ user_id, location_id, visit_date });
    res.status(201).json(newVisit);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateUserVisit = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const visit = await UserVisit.findByPk(id);
    if (!visit) return res.status(404).json({ error: 'User visit not found' });
    Object.keys(req.body).forEach(key => {
      visit[key] = req.body[key] ?? visit[key];
    });
    await visit.save();
    res.json(visit);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteUserVisit = async (req, res) => {
  try {
    const { id } = req.params;
    const visit = await UserVisit.findByPk(id);
    if (!visit) return res.status(404).json({ error: 'User visit not found' });
    await visit.destroy();
    res.json({ message: 'User visit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 