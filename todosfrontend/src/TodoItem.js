import React from "react";

const TodoItem = ({name, completed, onDelete, onToggle}) => (
    <li className="todo">
        <span 
            className={completed?("completed"):("")}
            onClick={onToggle}
        >
            {name}
        </span>
        <button className="deleteBtn" onClick={onDelete}> X </button>
    </li>
) 

export default TodoItem;