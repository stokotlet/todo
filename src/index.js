import React from 'react';
import ReactDOM from 'react-dom';

import TaskList from './components/task-list';
import NewTaskForm from './components/new-task-form';
import Footer from './components/footer';
import './index.css';

class App extends React.Component {
  idxCounter = 0;

  createNewTask = (label, timer = 0) => {
    const newTask = {
      label: label,
      done: false,
      id: this.idxCounter++,
      timer: timer,
      interval: '',
    };
    return newTask;
  };

  state = {
    taskData: [this.createNewTask('some1', 500), this.createNewTask('some2', 5)],
    filter: 'all',
  };

  counter = () => {
    const countList = this.state.taskData.filter((task) => !task.done);
    return countList.length;
  };

  addNewTask = (label, time) => {
    const newTask = this.createNewTask(label, time);
    this.setState(({ taskData }) => {
      const copyTaskData = [...taskData];
      const newTaskData = [...copyTaskData, newTask];
      return {
        taskData: newTaskData,
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((task) => task.id === id);
      const task = taskData[idx];
      const currentTask = { ...task };
      clearInterval(currentTask.interval);
      const newTaskData = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)];
      return {
        taskData: newTaskData,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ taskData }) => {
      let active = taskData.filter((task) => !task.done);
      let done = taskData.filter((task) => task.done);
      done.forEach((task) => clearInterval(task.interval));
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

  updateTimer = (id) => {
    let interval = setInterval(() => {
      this.setState(({ taskData }) => {
        const idx = taskData.findIndex((task) => task.id === id);
        const task = taskData[idx];
        const currentTask = { ...task };
        if (currentTask.timer !== 0) {
          currentTask.timer = currentTask.timer - 1;
          currentTask.interval = interval;
        } else {
          clearInterval(interval);
        }
        const newTaskData = [...taskData.slice(0, idx), currentTask, ...taskData.slice(idx + 1)];
        return {
          taskData: newTaskData,
        };
      });
    }, 1000);
  };

  clearInterval = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((task) => task.id === id);
      const task = taskData[idx];
      const currentTask = { ...task };
      currentTask.interval = '';
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
            filter={this.state.filter}
            onDeleted={this.deleteTask}
            onTaskDone={this.onTaskDone}
            onEditTask={this.onEditTask}
            updateTimer={this.updateTimer}
            clearInterval={this.clearInterval}
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
