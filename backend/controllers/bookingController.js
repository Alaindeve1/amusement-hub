const { Booking } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createBooking = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { user_id, location_id, booking_reference, visit_date, total_amount, status } = req.body;
    const newBooking = await Booking.create({ user_id, location_id, booking_reference, visit_date, total_amount, status });
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateBooking = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    // Ownership check: only owner or admin can update
    if (booking.user_id !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You can only update your own booking' });
    }
    Object.keys(req.body).forEach(key => {
      booking[key] = req.body[key] ?? booking[key];
    });
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    // Ownership check: only owner or admin can delete
    if (booking.user_id !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'You can only delete your own booking' });
    }
    await booking.destroy();
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 