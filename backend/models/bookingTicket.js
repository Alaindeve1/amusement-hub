const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BookingTicket = sequelize.define('BookingTicket', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  booking_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ticket_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  unit_price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  total_price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
});

module.exports = BookingTicket; 