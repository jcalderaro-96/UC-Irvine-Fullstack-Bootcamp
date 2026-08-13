// server/src/routes/ticket-routes.js

const express = require('express');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// In-memory ticket store (this will reset when the server restarts)
let tickets = [
  { id: 1, title: 'Fix bug', status: 'To Do' }, // Initial sample ticket
];

// Protected GET route for fetching tickets
router.get('/', authenticateToken, (req, res) => {
  res.json(tickets);  // Return the dynamically stored tickets
});

// Protected POST route for creating a new ticket
router.post('/', authenticateToken, (req, res) => {
  const { title, status } = req.body;

  // Validate that both title and status are provided
  if (!title || !status) {
    return res.status(400).json({ message: 'Title and status are required' });
  }

  // Create a new ticket object
  const newTicket = {
    id: tickets.length + 1,  // Generate new ID based on array length
    title,
    status,
  };

  // Add the new ticket to the tickets array
  tickets.push(newTicket);

  // Respond with the newly created ticket
  res.status(201).json({ message: 'Ticket created successfully!', ticket: newTicket });
});

// Export the router
module.exports = router;
