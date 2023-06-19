import React, { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const text = todoTextInputRef.current!.value;
        props.onAddTodo(text);
    };

    return <form onSubmit={submitHandler}>
        <label>Todo text</label>
        <input type='text' id='text' ref={todoTextInputRef} ></input>
        <button>Add Todo</button>
    </form>;
};

export default NewTodo;