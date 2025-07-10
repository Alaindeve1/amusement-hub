const { UserFavorite } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllUserFavorites = async (req, res) => {
  try {
    const favorites = await UserFavorite.findAll();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getUserFavoriteById = async (req, res) => {
  try {
    const { id } = req.params;
    const favorite = await UserFavorite.findByPk(id);
    if (!favorite) return res.status(404).json({ error: 'User favorite not found' });
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createUserFavorite = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { user_id, location_id } = req.body;
    const newFavorite = await UserFavorite.create({ user_id, location_id });
    res.status(201).json(newFavorite);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateUserFavorite = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const favorite = await UserFavorite.findByPk(id);
    if (!favorite) return res.status(404).json({ error: 'User favorite not found' });
    Object.keys(req.body).forEach(key => {
      favorite[key] = req.body[key] ?? favorite[key];
    });
    await favorite.save();
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteUserFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const favorite = await UserFavorite.findByPk(id);
    if (!favorite) return res.status(404).json({ error: 'User favorite not found' });
    await favorite.destroy();
    res.json({ message: 'User favorite deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 