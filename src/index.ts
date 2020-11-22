import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import apiRouter from './api/api.router';

dotenv.config();


const app = express();

/** Base server middlewares */
app.use(bodyParser.json());
app.use(cors());

/** Current Routes */
app.use('/api', apiRouter);

const port = process.env.PORT || 80;
app.listen(port, () =>
    console.log(`
    Running at http://localhost:${port}
  `)
);
