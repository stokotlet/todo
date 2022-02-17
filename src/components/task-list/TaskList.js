import React from 'react';

import Task from '../task/Task';
import './task-list.css';

function TaskList({ taskData, onDeleted, onTaskDone, onEditTask }) {
  const taskList = taskData.map((task) => (
    <div key={task.id}>
      <Task
        {...task}
        onDeleted={() => onDeleted(task.id)}
        onTaskDone={() => onTaskDone(task.id)}
        onEditTask={(label) => onEditTask(task.id, label)}
      />
    </div>
  ));
  return <ul className="todo-list">{taskList}</ul>;
}

export default TaskList;
