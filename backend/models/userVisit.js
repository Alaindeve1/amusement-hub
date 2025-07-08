const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserVisit = sequelize.define('UserVisit', {
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
  visit_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  visit_notes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = UserVisit; 