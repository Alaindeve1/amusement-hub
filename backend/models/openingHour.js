const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OpeningHour = sequelize.define('OpeningHour', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  day_of_week: {
    type: DataTypes.INTEGER, // 0-6 (Sunday-Saturday)
    allowNull: false
  },
  opening_time: {
    type: DataTypes.TIME,
    allowNull: true
  },
  closing_time: {
    type: DataTypes.TIME,
    allowNull: true
  },
  is_closed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  special_notes: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = OpeningHour; 