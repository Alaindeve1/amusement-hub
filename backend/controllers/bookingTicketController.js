const { BookingTicket } = require('../models');
const { validationResult } = require('express-validator');

exports.getAllBookingTickets = async (req, res) => {
  try {
    const tickets = await BookingTicket.findAll();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getBookingTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await BookingTicket.findByPk(id);
    if (!ticket) return res.status(404).json({ error: 'Booking ticket not found' });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createBookingTicket = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { booking_id, ticket_type_id, quantity, unit_price, total_price } = req.body;
    const newTicket = await BookingTicket.create({ booking_id, ticket_type_id, quantity, unit_price, total_price });
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateBookingTicket = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const { id } = req.params;
    const ticket = await BookingTicket.findByPk(id);
    if (!ticket) return res.status(404).json({ error: 'Booking ticket not found' });
    Object.keys(req.body).forEach(key => {
      ticket[key] = req.body[key] ?? ticket[key];
    });
    await ticket.save();
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteBookingTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await BookingTicket.findByPk(id);
    if (!ticket) return res.status(404).json({ error: 'Booking ticket not found' });
    await ticket.destroy();
    res.json({ message: 'Booking ticket deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}; 