import mongoose from 'mongoose';

export default async function initDb() {
    mongoose.connect('mongodb://mongo:27017/mern').then(res => res).catch(err => err);
}
