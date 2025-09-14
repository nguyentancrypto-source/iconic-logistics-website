import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { itemsRouter, searchRouter } from './routes/items.ts';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());

// Placeholder endpoints
app.get('/', (req, res) => {
  res.json({ message: 'Iconic Logistics Backend API' });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/items', itemsRouter);
app.use('/search', searchRouter);

app.listen(PORT, () => {
  console.log(`🚚 Logistics backend running on http://localhost:${PORT}`);
});
