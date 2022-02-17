import React from "react";
import Task from "../task/Task";

const TaskList = ( {taskData, onDeleted, onTaskDone, onEditTask} ) => {
    let taskList = taskData.map(task => {
        return (
            <div key={task.id}>
                <Task {...task}
                      onDeleted = { () => onDeleted(task.id) }
                      onTaskDone = { () => onTaskDone(task.id) }
                      onEditTask = { (label) => onEditTask(task.id, label) }
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