import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import registerRouter from './routes/register.route';

dotenv.config();

const app = express();

// Use Helmet middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/register', registerRouter);

export default app;
