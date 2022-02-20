import React from 'react';
import ReactDOM from 'react-dom';

import TaskList from './components/task-list';
import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';
import './index.css';

class App extends React.Component {
  idxCounter = 0;

  createNewTask = (label) => {
    const newTask = {
      label: label,
      done: false,
      id: this.idxCounter++,
    };
    return newTask;
  };

  state = {
    taskData: [this.createNewTask('some 1'), this.createNewTask('some 2')],
    filter: 'all',
  };

  counter = () => {
    const countList = this.state.taskData.filter((task) => !task.done);
    return countList.length;
  };

  deleteTask = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((task) => task.id === id);
      const newTaskData = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)];
      return {
        taskData: newTaskData,
      };
    });
  };

  onTaskDone = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((task) => task.id === id);
      const task = taskData[idx];
      const currentTask = { ...task };
      currentTask.done = !currentTask.done;
      const newTaskData = [...taskData.slice(0, idx), currentTask, ...taskData.slice(idx + 1)];
      return {
        taskData: newTaskData,
      };
    });
  };

  onFilterCompleted = () => {
    this.setState({
      filter: 'complete',
    });
  };

  onFilterActive = () => {
    this.setState({
      filter: 'active',
    });
  };

  onFilterAll = () => {
    this.setState({
      filter: 'all',
    });
  };

  addNewTask = (label) => {
    const newTask = this.createNewTask(label);
    this.setState(({ taskData }) => {
      const copyTaskData = [...taskData];
      const newTaskData = [...copyTaskData, newTask];
      return {
        taskData: newTaskData,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ taskData }) => {
      const active = taskData.filter((task) => !task.done);
      return {
        taskData: active,
      };
    });
  };

  onEditTask = (label, id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((task) => task.id === id);
      const task = taskData[idx];
      const currentTask = { ...task };
      currentTask.label = label;
      const newTaskData = [...taskData.slice(0, idx), currentTask, ...taskData.slice(idx + 1)];
      return {
        taskData: newTaskData,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todo</h1>
          <NewTaskForm addNewTask={this.addNewTask} />
        </header>
        <section className="main">
          <TaskList
            taskData={this.state.taskData}
            onDeleted={this.deleteTask}
            onTaskDone={this.onTaskDone}
            onEditTask={this.onEditTask}
            filter={this.state.filter}
          />
        </section>
        <Footer
          onFilterCompleted={this.onFilterCompleted}
          onFilterActive={this.onFilterActive}
          onFilterAll={this.onFilterAll}
          clearCompleted={this.clearCompleted}
          counter={this.counter()}
        />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
