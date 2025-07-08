const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LocationImage = sequelize.define('LocationImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alt_text: {
    type: DataTypes.STRING,
    allowNull: true
  },
  display_order: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_primary: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = LocationImage;
