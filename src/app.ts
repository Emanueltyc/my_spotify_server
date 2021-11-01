import Express, { Router } from 'express';
import { router } from './routes';
import 'dotenv/config';

const app = Express();
app.use(Express.json());
app.use(router);
