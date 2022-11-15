import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import { router } from './router';

dotenv.config();

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

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(() => console.log('Failed to connect to MongoDB'));
