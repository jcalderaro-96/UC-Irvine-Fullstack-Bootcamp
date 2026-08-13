import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// Public routes
router.use('/auth', authRoutes);

// Protected API routes
router.use('/api', authenticateToken, apiRoutes); // This will protect all /api routes

export default router;
