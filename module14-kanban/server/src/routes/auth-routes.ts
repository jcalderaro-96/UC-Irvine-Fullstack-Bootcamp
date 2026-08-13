import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();

// POST /login - Login a user
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Compare the password with the hash stored in the database
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET_KEY as string, // Using the secret from .env
    { expiresIn: '1h' } // The token will expire in 1 hour
  );

  // Send token to the client
  return res.json({ token }); // Ensure there's a return statement here
});

export default router;
