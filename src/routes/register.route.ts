// src/routes/register.route.ts
import express from 'express';
import { handleRegister } from '../controllers/register.controller';

const router = express.Router();

// ✅ Correct usage — this is a route handler, not middleware
router.post('/register', handleRegister);

export default router;
