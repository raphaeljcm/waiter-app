import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import { router } from './router';

const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to MongoDB');

    const app = express();

    // Middlewares
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '../', 'uploads')),
    );
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Failed to connect to MongoDB'));
