import React from 'react';
import Todo from './Todo';
import { default as TodoModel } from '../types/todo';

const TodoList: React.FC<{
        items: TodoModel[],
        deleteTodoHandler: (id: string) => void,
        updateTodoHandler: (id: string, todo: TodoModel) => void
    }> = ({ items, deleteTodoHandler, updateTodoHandler }) => {
        return <div className='todo-list-container'>
            <div className='todo-list-header'>Todos</div>
            <ul>
                { items.map((item: TodoModel, i: number) => <Todo key={i} todo={item} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} />) }
            </ul>
        </div>;
    };

export default TodoList;
