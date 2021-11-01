import Express, { Router } from 'express';
import { router } from './routes';
import 'dotenv/config';

const app = Express();
app.use(Express.json());
app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`Server running at port ${process.env.PORT}!`)
);
