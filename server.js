import express from 'express';
import dotenv from 'dotenv';
import { mongoConnect, mongoDCListener, mongoErrorListener } from './db/connection.db.js';
import routes from './route/routes.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoDCListener();
mongoErrorListener();
await mongoConnect();

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server läuft auf dem Port ${port}`);
});


