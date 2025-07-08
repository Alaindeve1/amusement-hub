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

// One-to-Many: Category → Locations
Category.hasMany(Location, { foreignKey: 'category_id' });
Location.belongsTo(Category, { foreignKey: 'category_id' });

// One-to-Many: Location → LocationImage
Location.hasMany(LocationImage, { foreignKey: 'location_id' });
LocationImage.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: Location → LocationFeature
Location.hasMany(LocationFeature, { foreignKey: 'location_id' });
LocationFeature.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: Location → OpeningHour
Location.hasMany(OpeningHour, { foreignKey: 'location_id' });
OpeningHour.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: Location → TicketType
Location.hasMany(TicketType, { foreignKey: 'location_id' });
TicketType.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: Location → SpecialEvent
Location.hasMany(SpecialEvent, { foreignKey: 'location_id' });
SpecialEvent.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: Location → Review
Location.hasMany(Review, { foreignKey: 'location_id' });
Review.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: User → Review
User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

// One-to-Many: Review → ReviewImage
Review.hasMany(ReviewImage, { foreignKey: 'review_id' });
ReviewImage.belongsTo(Review, { foreignKey: 'review_id' });

// One-to-Many: User → UserFavorite
User.hasMany(UserFavorite, { foreignKey: 'user_id' });
UserFavorite.belongsTo(User, { foreignKey: 'user_id' });

// One-to-Many: Location → UserFavorite
Location.hasMany(UserFavorite, { foreignKey: 'location_id' });
UserFavorite.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: User → UserVisit
User.hasMany(UserVisit, { foreignKey: 'user_id' });
UserVisit.belongsTo(User, { foreignKey: 'user_id' });

// One-to-Many: Location → UserVisit
Location.hasMany(UserVisit, { foreignKey: 'location_id' });
UserVisit.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: User → Booking
User.hasMany(Booking, { foreignKey: 'user_id' });
Booking.belongsTo(User, { foreignKey: 'user_id' });

// One-to-Many: Location → Booking
Location.hasMany(Booking, { foreignKey: 'location_id' });
Booking.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: Booking → BookingTicket
Booking.hasMany(BookingTicket, { foreignKey: 'booking_id' });
BookingTicket.belongsTo(Booking, { foreignKey: 'booking_id' });

// One-to-Many: TicketType → BookingTicket
TicketType.hasMany(BookingTicket, { foreignKey: 'ticket_type_id' });
BookingTicket.belongsTo(TicketType, { foreignKey: 'ticket_type_id' });

// One-to-Many: Location → LocationStat
Location.hasMany(LocationStat, { foreignKey: 'location_id' });
LocationStat.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: Location → RideAttraction
Location.hasMany(RideAttraction, { foreignKey: 'location_id' });
RideAttraction.belongsTo(Location, { foreignKey: 'location_id' });

// One-to-Many: RideAttraction → RideWaitTime
RideAttraction.hasMany(RideWaitTime, { foreignKey: 'ride_id' });
RideWaitTime.belongsTo(RideAttraction, { foreignKey: 'ride_id' });

// Many-to-Many: Location ↔ LocationTag (through LocationTagAssociation)
Location.belongsToMany(LocationTag, {
  through: LocationTagAssociation,
  foreignKey: 'location_id',
  otherKey: 'tag_id'
});
LocationTag.belongsToMany(Location, {
  through: LocationTagAssociation,
  foreignKey: 'tag_id',
  otherKey: 'location_id'
});
