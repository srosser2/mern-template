import { Schema, model } from 'mongoose';

export interface ITodo {
    name: string;
    description?: string;
    dueDate?: Date;
    completed: boolean;
}

const todoSchema = new Schema({
    name: String,
    description: String,
    dueDate: Date,
    completed: Boolean
});

export const Todo = model<ITodo>('Todo', todoSchema);
