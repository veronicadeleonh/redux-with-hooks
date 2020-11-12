import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoAction } from "../redux"
import { v4 as uuid } from 'uuid';

const TodoInput = () => {

    const [todo, setTodo]= useState("")

    const dispatch = useDispatch();
    const addTodo = (todo) => dispatch(addTodoAction(todo))

    const onChange = event => {
        setTodo(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()
        if(todo.trim() === "") return //if we type white space

        addTodo({
            id: uuid(),
            name: todo,
            complete: false
        })

        setTodo("")
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-div">
                <input type="text"
                    name="todo"
                    placeholder="Add to do"
                    value={todo}
                    onChange={onChange}
                    />
                <button type="submit">Add Todo</button>
            </div>
        </form>
    )
}

export default TodoInput