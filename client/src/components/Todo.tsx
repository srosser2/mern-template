import React from 'react';
import TodoModel from '../types/todo';

const Todo: React.FC<{
        todo: TodoModel,
        deleteTodoHandler: (id: string)=> void,
        updateTodoHandler: (id: string, todo: TodoModel) => void
    }> = ({ todo, deleteTodoHandler, updateTodoHandler }) => {
        return <li className='todo' id={todo._id}>
            <span
                className={['material-symbols-outlined todo-completed', todo.completed ? 'completed' : ''].join(' ')}
                onClick={() => updateTodoHandler(todo._id, { ...todo, completed: !todo.completed })}
            >
                { todo.completed ? 'check_circle' : 'radio_button_unchecked' }
            </span>
            <div className='todo-details'>
                <div className='todo-name'>{todo.name}</div>
                <div className='todo-description'>{todo.description}</div>
            </div>
            <span className="material-symbols-outlined todo-delete" onClick={() => deleteTodoHandler(todo._id)}>delete</span>
        </li>;
    };

export default Todo;
