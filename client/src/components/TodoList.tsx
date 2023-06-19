import React from 'react';
import Todo from './Todo';
import { default as TodoModel } from '../types/todo';

const TodoList: React.FC<{
        items: TodoModel[],
        deleteTodoHandler: (id: string) => void,
        updateTodoHandler: (id: string, todo: TodoModel) => void
    }> = ({ items, deleteTodoHandler, updateTodoHandler }) => {
        return <>
            <ul>
                { items.map((item: TodoModel, i: number) => <Todo key={i} todo={item} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} />) }
            </ul>
        </>;
    };

export default TodoList;
