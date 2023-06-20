import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import Todo from './types/todo';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch('api/todos',
            {
                method: 'GET'
            })
            .then(res => res.json())
            .then(res => {
                setTodos(res);
            })
            .catch(err => console.log(err));
    }, [todos]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text, text, false);
        fetch('api/todos',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: text })
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
        return;
    };

    const deleteTodoHandler = (id: string) => {
        fetch(`/api/todos/${id}`, { method: 'DELETE' })
            .then(res => console.log(res))
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
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (<>
        <NewTodo onAddTodo={addTodoHandler} />
        <TodoList items={todos} deleteTodoHandler={deleteTodoHandler} updateTodoHandler={updateTodoHandler} />
    </>);
};

export default App;
