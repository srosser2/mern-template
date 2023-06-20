import mongoose from 'mongoose';

export default async function initDb() {
    const {
        MONGO_USERNAME,
        MONGO_PORT,
        MONGO_DBNAME
    } = process.env;

    const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PORT}/${MONGO_DBNAME}`;
    mongoose.connect(MONGO_URI).then(res => res).catch(err => err);
}
