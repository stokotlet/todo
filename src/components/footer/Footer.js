import React from "react";
import TasksFilter from "../task-filter/TasksFilter";

const Footer = ( {onFilterCompleted, onFilterActive, onFilterAll, clearCompleted, counter} ) => {
    return (
        <footer className="footer">
            <span className="todo-count">{counter} task left</span>
            <TasksFilter onFilterCompleted = { () => onFilterCompleted() }
                         onFilterActive = { () => onFilterActive() }
                         onFilterAll = { () => onFilterAll() }
            />
            <button className="clear-completed"
                    onClick={() => clearCompleted()}
            >Clear completed</button>
        </footer>
    )
}

export default Footer