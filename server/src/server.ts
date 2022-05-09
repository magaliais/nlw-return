import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { ADDRGETNETWORKPARAMS } from 'dns';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(routes);

// Start server
app.listen(process.env.PORT || 3333, () => {
  console.log("Running on http://localhost:3333/...");
});