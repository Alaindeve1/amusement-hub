const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ReviewImage = sequelize.define('ReviewImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  review_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  caption: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = ReviewImage; 