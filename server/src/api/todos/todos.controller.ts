import { Request, Response, NextFunction } from 'express';
import { Todo, ITodo } from './todos.model';
import { ParamsWithId } from '../../interfaces/ParamsWithId';

export async function getTodos(req: Request, res: Response, next: NextFunction) {
    try {
        const todos = await Todo.find({});
        res.send(todos);
    } catch (err) {
        next(err);
    }
}

export async function createTodo(req: Request<{}, ITodo>, res: Response, next: NextFunction) {
    try {
        const todo = await new Todo({ name: req.body.name, completed: req.body.completed }).save();
        res.send(todo);
    } catch (err) {
        next(err);
    }
}

export async function updateTodo(req: Request<ParamsWithId, ITodo>, res: Response, next: NextFunction) {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.send(todo);
    } catch (err) {
        next(err);
    }
}

export async function deleteTodo(req: Request<ParamsWithId, ITodo>, res: Response, next: NextFunction) {
    try {
        await Todo.findByIdAndRemove(req.params.id);
        res.send({});
    } catch (err) {
        next(err);
    }
}