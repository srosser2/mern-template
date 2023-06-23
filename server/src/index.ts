import express from 'express';
import cors from 'cors';
import router from './api';
import initDb from './db';
import { errorHandler, notFoundHandler } from './middleware';
require('dotenv').config();

const app = express();

const port = 3000;

const main = async () => {
    app.use(express.json());
    app.use('/api', router);
    app.use(cors());
    await initDb();
    app.use(notFoundHandler);
    app.use(errorHandler);
    app.listen(port, () => console.log(`Listening on port ${port}`));
};


main();
