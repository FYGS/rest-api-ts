import express, { Express } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';

dotenv.config();

const PORT = process.env.PORT || 8080;
const app: Express = express();


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(PORT, () => {
  console.log(`Server Up and Running on ${PORT} ⚡`);
});
