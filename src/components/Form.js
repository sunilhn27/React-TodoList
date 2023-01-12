import React from 'react'
import shortid from 'shortid';
import { useState } from 'react';

function Form({ todo, setTodo, todoList, setTodoList }) {

    const [display, setDisplay] = useState("");

    function handleOnsubmit(event) {
        event.preventDefault();
        setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
        console.log(todoList);
        setTodo("")
    }

    function handleOnchange(event) {
        setTodo(event.target.value);
        
    }

    return (
        <div >
            <form onSubmit={handleOnsubmit}>
                <input className='input' type="text" value={todo} onChange={handleOnchange} placeholder='Enter TODO List' ></input>
                <button className='addItem'><span>Add item</span></button>
            </form>
            {display?<button>Remove All</button>:""}
        </div>
    )
}

export default Form
