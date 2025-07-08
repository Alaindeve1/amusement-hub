const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LocationFeature = sequelize.define('LocationFeature', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  feature_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  icon_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  display_order: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = LocationFeature; 