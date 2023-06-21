import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import Todo from './types/todo';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getTodosHandler();
    }, []);

    const getTodosHandler = () => {
        fetch('api/todos',
            {
                method: 'GET'
            })
            .then(res => res.json())
            .then(res => {
                setTodos(res);
            })
            .catch(err => console.log(err));
    };

    const addTodoHandler = (text: string, description?: string) => {
        fetch('api/todos',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: text, description })
            })
            .then(() => {
                getTodosHandler();
            })
            .catch(err => console.log(err));
    };

    const deleteTodoHandler = (id: string) => {
        fetch(`/api/todos/${id}`, { method: 'DELETE' })
            .then(() => {
                getTodosHandler();
            })
            .catch(err => console.log(err));
    };

    const updateTodoHandler = (id: string, todo: Todo) => {
        fetch(`/api/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(() => {
                getTodosHandler();
            })
            .catch(err => console.log(err));
    };

    return <>
        <div className='container'>
            <TodoList items={todos} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} />
        </div>
        <div className='container'>
            <NewTodo onAddTodo={addTodoHandler} />
        </div>
    </>;
};

export default App;
