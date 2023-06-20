import { Schema, model } from 'mongoose';

export interface ITodo {
    name: string;
    completed: boolean;
}

const todoSchema = new Schema({
    name: String,
    completed: Boolean
});

export const Todo = model<ITodo>('Todo', todoSchema);
