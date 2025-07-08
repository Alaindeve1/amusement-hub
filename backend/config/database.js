const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: true, // Set to true if you want to see SQL queries in your console
});

module.exports = sequelize;
