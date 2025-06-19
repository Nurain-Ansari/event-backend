import express from 'express';
import {
  handleGetAllRegister,
  handleRegister,
  handleUpdateRegister,
} from '../controllers/register.controller';

const router = express.Router();

router.post('/register', handleRegister);
router.patch('/register', handleUpdateRegister);
router.get('/register', handleGetAllRegister);

export default router;
