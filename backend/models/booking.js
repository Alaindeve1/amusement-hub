const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Booking = sequelize.define('Booking', {
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
  booking_reference: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  visit_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  adult_tickets: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  child_tickets: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  senior_tickets: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  total_amount: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
    defaultValue: 'pending'
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: true
  },
  payment_status: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Booking; 