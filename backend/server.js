const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running!');
});

sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Database connection error:', err));

require('./models'); // This will import and register all models

sequelize.sync({ alter: true }) // Use { force: true } to drop and recreate tables (dangerous!)
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('Error syncing models:', err);
  });

const categoryRoutes = require('./routes/category');
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
