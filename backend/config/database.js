const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  // Single connection string, e.g. postgres://user:pass@host:5432/dbname
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: true, // Set to true if you want to see SQL queries in your console
  });
} else if (process.env.DB_NAME && process.env.DB_USER && process.env.DB_PASSWORD !== undefined) {
  // Discrete parameters via environment variables
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    dialect: 'postgres',
    logging: true,
  });
} else {
  throw new Error(
    'Database configuration missing. Set DATABASE_URL or DB_HOST/DB_PORT/DB_NAME/DB_USER/DB_PASSWORD in backend/.env'
  );
}

module.exports = sequelize;
