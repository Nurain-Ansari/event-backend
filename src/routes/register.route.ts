import express from 'express';
import { handleRegister, handleUpdateRegister } from '../controllers/register.controller';

const router = express.Router();

router.post('/register', handleRegister);
router.patch('/register', handleUpdateRegister);

export default router;
