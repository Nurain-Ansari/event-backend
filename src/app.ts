import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import registerRouter from './routes/register.route';
import authRouter from './routes/auth.route';

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', registerRouter);
app.use('/api', authRouter);

// Error handler (must be last)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error('Internal server error:', err.message);
  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong',
  });
});

export default app;
