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
const locationRoutes = require('./routes/location');
const userRoutes = require('./routes/user');
const reviewRoutes = require('./routes/review');
const locationImageRoutes = require('./routes/locationImage');
const locationFeatureRoutes = require('./routes/locationFeature');
const openingHourRoutes = require('./routes/openingHour');
const ticketTypeRoutes = require('./routes/ticketType');
const specialEventRoutes = require('./routes/specialEvent');
const userFavoriteRoutes = require('./routes/userFavorite');
const userVisitRoutes = require('./routes/userVisit');
const bookingRoutes = require('./routes/booking');
const bookingTicketRoutes = require('./routes/bookingTicket');
const locationStatRoutes = require('./routes/locationStat');
const rideAttractionRoutes = require('./routes/rideAttraction');
const rideWaitTimeRoutes = require('./routes/rideWaitTime');
const locationTagRoutes = require('./routes/locationTag');
const locationTagAssociationRoutes = require('./routes/locationTagAssociation');

app.use('/api/categories', categoryRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/location-images', locationImageRoutes);
app.use('/api/location-features', locationFeatureRoutes);
app.use('/api/opening-hours', openingHourRoutes);
app.use('/api/ticket-types', ticketTypeRoutes);
app.use('/api/special-events', specialEventRoutes);
app.use('/api/user-favorites', userFavoriteRoutes);
app.use('/api/user-visits', userVisitRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/booking-tickets', bookingTicketRoutes);
app.use('/api/location-stats', locationStatRoutes);
app.use('/api/ride-attractions', rideAttractionRoutes);
app.use('/api/ride-wait-times', rideWaitTimeRoutes);
app.use('/api/location-tags', locationTagRoutes);
app.use('/api/location-tag-associations', locationTagAssociationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
