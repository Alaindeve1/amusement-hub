const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const UserFavorite = sequelize.define('UserFavorite', {
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
  }
});

module.exports = UserFavorite; 