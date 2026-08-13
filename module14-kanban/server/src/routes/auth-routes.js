// server/src/routes/auth-routes.js

const express = require('express');
const jwt = require('jsonwebtoken');  // Add JWT import
const { authenticateToken } = require('../middleware/auth');  // Import the authentication middleware

const router = express.Router();

// POST route for logging in and getting a JWT token
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Basic authentication logic (you can replace this with a database check)
  if (username === 'admin' && password === 'password') {
    // Create a JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.json({ token });  // Send token back to the client
  }

  // If credentials are incorrect
  return res.status(401).json({ message: 'Invalid credentials' });
});

// Optional: Add a route to test authentication (only accessible with a valid token)
router.get('/user', authenticateToken, (req, res) => {
  // This route is protected and requires a valid token
  res.json({ username: req.user.username });
});

module.exports = router;
