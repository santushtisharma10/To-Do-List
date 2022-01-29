import React from "react"
import {Link} from "react-router-dom"
import "./ToDoList.css"

const TodoList = () => {

    return(
        <div>
            <h1>To Do List</h1>
            <Link to="/login">Register</Link>
        </div>
    )
}

export default TodoList