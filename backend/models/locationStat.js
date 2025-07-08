const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LocationStat = sequelize.define('LocationStat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stat_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  daily_visitors: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  average_wait_time: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  total_rides_operational: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  total_rides_closed: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  weather_conditions: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = LocationStat; 