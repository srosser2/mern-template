import React from 'react';
import TodoModel from '../types/todo';

const Todo: React.FC<{
        todo: TodoModel,
        deleteTodoHandler: (id: string)=> void,
        updateTodoHandler: (id: string, todo: TodoModel) => void
    }> = ({ todo, deleteTodoHandler, updateTodoHandler }) => {
        return <li>
            <div>{todo.name}</div>
            <button onClick={() => deleteTodoHandler(todo._id)}>Delete</button>
            <input type="checkbox" checked={todo.completed} onChange={() => updateTodoHandler(todo._id, { ...todo, completed: !todo.completed })} />
        </li>;
    };

export default Todo;
