// server/src/index.js

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.JWT_SECRET);  // Should print the value of your secret key, e.g., 'mysecretkey123'

const app = express();
app.use(express.json());  // Middleware to parse JSON

// Import and use auth and ticket routes
const authRoutes = require('./routes/auth-routes');
const ticketRoutes = require('./routes/ticket-routes');  // Import ticket routes

// Use the routes
app.use('/api/auth', authRoutes);  // Authentication routes (login, etc.)
app.use('/api/tickets', ticketRoutes);  // Ticket routes (GET, POST, etc.)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
