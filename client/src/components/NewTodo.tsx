import React, { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string, description?: string) => void }> = (props) => {
    const formRef = useRef<HTMLFormElement>(null);
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const descriptionTextInputRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const text = todoTextInputRef.current!.value;
        const decription = descriptionTextInputRef.current!.value;
        props.onAddTodo(text, decription);
        formRef.current!.reset();
    };

    return <div className='new-todo'>
        <form onSubmit={submitHandler} ref={formRef}>
            <div className="input-container">
                <input type='text' id='text' className='todo-name' ref={todoTextInputRef} placeholder='New Todo' ></input>
            </div>
            <div className='input-container'>
                <textarea
                    ref={descriptionTextInputRef}
                    className='todo-description'
                    placeholder='Description'
                    rows={5}
                    />
            </div>
            <div className='new-todo-footer'>
                <button className='btn due-date'><span className="material-symbols-outlined">calendar_month</span>Due Date</button>
                <button className='btn btn-primary add-task'>Add Task</button>
            </div>
        </form>
    </div>
};

export default NewTodo;