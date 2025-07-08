const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TicketType = sequelize.define('TicketType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  age_group: {
    type: DataTypes.ENUM('adult', 'child', 'senior', 'infant'),
    allowNull: false
  },
  min_age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  max_age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

module.exports = TicketType; 