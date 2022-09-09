import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import { connect } from './database/connection';
import { contactsRoutes } from "./routes";

// DATABASE Connection
connect();


const PORT = process.env.PORT || 8080;
const app: Express = express();


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Working!');
});

contactsRoutes(app);

app.listen(PORT, () => {
  console.log(`Server Up and Running on ${PORT} ⚡`);
});
