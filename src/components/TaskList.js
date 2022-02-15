import React from "react";
import Task from "./Task";

const TaskList = ( {taskData, onDeleted} ) => {
    let taskList = taskData.map(task => {
        return (
            <div key={task.id}>
                <Task {...task} onDeleted = {() => onDeleted(task.id)}/>
            </div>
        )
    })
    return (
        <ul className="todo-list">
            { taskList }
        </ul>
    )
}

export default TaskList