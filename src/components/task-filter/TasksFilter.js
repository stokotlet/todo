import React from "react";

const TasksFilter = ( {onFilterCompleted, onFilterActive, onFilterAll} ) => {
    return (
        <ul className="filters">
            <li>
                <button onClick={onFilterAll}className="selected">All</button>
            </li>
            <li>
                <button onClick={onFilterActive}>Active</button>
            </li>
            <li>
                <button onClick={onFilterCompleted}>Completed</button>
            </li>
        </ul>
    )
}

export default TasksFilter