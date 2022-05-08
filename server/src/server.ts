import express from 'express';
import { routes } from './routes';

const app = express();

// Middlewares
app.use(express.json());
app.use(routes);

// Start server
app.listen(3333, () => {
  console.log("Running on http://localhost:3333/...");
});