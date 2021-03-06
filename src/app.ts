import express from 'express';
import { router } from './routes';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`Server running at port ${process.env.PORT}!`)
);
