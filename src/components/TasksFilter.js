import React from "react";

const TasksFilter = ( {className} ) => {
    return (
        <ul className={className}>
            <li>
                <button className="selected">All</button>
            </li>
            <li>
                <button>Active</button>
            </li>
            <li>
                <button>Completed</button>
            </li>
        </ul>
    )
}

export default TasksFilter