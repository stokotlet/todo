import React from "react";
import Task from "../task/Task";

const TaskList = ( {taskData, onDeleted, onTaskDone} ) => {
    let taskList = taskData.map(task => {
        return (
            <div key={task.id}>
                <Task {...task}
                      onDeleted = { () => onDeleted(task.id) }
                      onTaskDone = { () => onTaskDone(task.id) }
                />
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