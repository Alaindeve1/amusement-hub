const { DataTypes } = require('sequelize'); // Import data types
const sequelize = require('../config/database'); // Import your DB connection

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,      // SQL type: INTEGER
    primaryKey: true,             // This is the primary key
    autoIncrement: true           // Auto-incrementing
  },
  name: {
    type: DataTypes.STRING,       // SQL type: VARCHAR
    allowNull: false,             // Required
    unique: true                  // Must be unique
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,         // SQL type: TEXT
    allowNull: true               // Optional
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Category; // Export the model
