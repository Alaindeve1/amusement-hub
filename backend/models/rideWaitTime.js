const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RideWaitTime = sequelize.define('RideWaitTime', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ride_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  current_wait_time: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('open', 'closed', 'maintenance'),
    allowNull: false
  },
  recorded_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = RideWaitTime; 