import React from 'react';

import Task from '../task/Task';
import './task-list.css';

function TaskList({ taskData, onDeleted, onTaskDone, onEditTask, filter }) {
  let filtered;
  if (filter === 'active') {
    filtered = taskData.filter((task) => task.done === false);
  } else if (filter === 'complete') {
    filtered = taskData.filter((task) => task.done === true);
  } else if (filter === 'all') {
    filtered = [...taskData];
  }

  const taskList = filtered.map((task) => (
    <div key={task.id}>
      <Task {...task} onDeleted={onDeleted} onTaskDone={onTaskDone} onEditTask={onEditTask} />
    </div>
  ));
  return <ul className="todo-list">{taskList}</ul>;
}

export default TaskList;
