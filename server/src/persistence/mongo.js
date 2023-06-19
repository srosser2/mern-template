const mongoose = require('mongoose');
const Todo = require('../models/Todo');

let db;

const init = () => {
    return new Promise((acc, rej) => {
        mongoose.connect(
            'mongodb://mongo:27017/mern', // update
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        db = mongoose.connection;
        acc(db);
    });
};

async function getItems() {
    try {
        const todos = await Todo.find({});
        return todos;
    } catch (err) {
        console.log(err);
    }
}

async function getItem(id) {
    try {
        const todo = Todo.findById(id);
        return todo;
    } catch (err) {
        console.log(err);
    }
}

async function storeItem(item) {
    try {
        await new Todo({ name: item.name, completed: item.completed }).save();
    } catch (err) {
        console.log(err);
    }
}

async function updateItem(id, item) {
    try {
        await Todo.findByIdAndUpdate(id, item);
    } catch (err) {
        console.log(err);
    }
}

async function removeItem(id) {
    try {
        const todo = await Todo.findByIdAndRemove(id);
        return todo;
    } catch (err) {
        console.log(err);
    }
}

async function teardown() {
    return new Promise((acc, rej) => {
        db.close(err => {
            if (err) rej(err);
            else acc();
        });
    });
}

module.exports = {
    init,
    getItems,
    getItem,
    storeItem,
    updateItem,
    removeItem,
    teardown
};
