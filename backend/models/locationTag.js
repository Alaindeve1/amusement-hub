const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LocationTag = sequelize.define('LocationTag', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tag_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  tag_description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = LocationTag; 