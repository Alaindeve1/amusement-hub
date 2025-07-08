const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RideAttraction = sequelize.define('RideAttraction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ride_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  ride_type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  min_height_cm: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  max_height_cm: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  min_age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  thrill_level: {
    type: DataTypes.ENUM('low', 'medium', 'high', 'extreme'),
    allowNull: true
  },
  capacity_per_hour: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  average_wait_time: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_operational: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

module.exports = RideAttraction; 