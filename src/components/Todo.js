import React from 'react'

function Todo({ todoItem, todoList, setTodoList }) {


    function handleRemove() {
        setTodoList(todoList.filter(item => item.id !== todoItem.id))
        console.log("todoItem", todoItem.id)
        console.log("remove");
    }

    return (
        <>
            <div>
                <h2>{todoItem.name} <button className='button1' onClick={handleRemove}>Delete</button></h2>
            </div>
            

        </>
    )
}

export default Todo
