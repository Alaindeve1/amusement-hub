const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LocationTagAssociation = sequelize.define('LocationTagAssociation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = LocationTagAssociation; 