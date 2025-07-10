const { User } = require('../models');
const { validationResult } = require('express-validator');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, username, password_hash, first_name, last_name, avatar_url, phone, date_of_birth, role, is_verified, is_active } = req.body;
    const newUser = await User.create({
      email, username, password_hash, first_name, last_name, avatar_url, phone, date_of_birth, role, is_verified, is_active
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    Object.keys(req.body).forEach(key => {
      user[key] = req.body[key] ?? user[key];
    });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 