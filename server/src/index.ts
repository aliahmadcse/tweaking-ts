import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';

import './controllers/LoginController';
import './controllers/RootController';

import { AppRouter } from './AppRouter';

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskdjf'] }));
app.use(AppRouter.getInstance());


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

