import express from 'express';
import cors from 'cors';
import router from './api';
import initDb from './db';

const app = express();

const port = 3000;

const main = async () => {
    app.use(express.json());
    app.use('/api', router);
    app.use(cors());
    await initDb();
    app.listen(port, () => console.log(`Listening on port ${port}`));
};

main();
