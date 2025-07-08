const Category = require('./category');
const Location = require('./location');
const User = require('./user');
const LocationImage = require('./locationImage');
const LocationFeature = require('./locationFeature');
const OpeningHour = require('./openingHour');
const TicketType = require('./ticketType');
const SpecialEvent = require('./specialEvent');
const Review = require('./review');
const ReviewImage = require('./reviewImage');
const UserFavorite = require('./userFavorite');
const UserVisit = require('./userVisit');
const Booking = require('./booking');
const BookingTicket = require('./bookingTicket');
const LocationStat = require('./locationStat');
const RideAttraction = require('./rideAttraction');
const RideWaitTime = require('./rideWaitTime');
const LocationTag = require('./locationTag');
const LocationTagAssociation = require('./locationTagAssociation');

// Export all models (optional, for use elsewhere)
module.exports = {
  Category,
  Location,
  User,
  LocationImage,
  LocationFeature,
  OpeningHour,
  TicketType,
  SpecialEvent,
  Review,
  ReviewImage,
  UserFavorite,
  UserVisit,
  Booking,
  BookingTicket,
  LocationStat,
  RideAttraction,
  RideWaitTime,
  LocationTag,
  LocationTagAssociation
};
