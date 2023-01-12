import { hasFormSubmit } from '@testing-library/user-event/dist/utils'
import React from 'react'
import Todo from './Todo'

function TodoList({ todoList ,setTodoList}) {
    return (
        <div>
            <ul>{todoList.map(
                todoItem => <Todo key={todoItem.id} todoItem={todoItem} todoList={todoList}setTodoList={setTodoList} ></Todo>
            )}</ul>
        </div>
    )
}

export default TodoList
