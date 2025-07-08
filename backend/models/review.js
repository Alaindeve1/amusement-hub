const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  review_text: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  is_verified_visit: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  is_helpful: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  helpful_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  is_approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Review; 