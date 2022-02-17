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
      viewClass: 'view',
      checkboxClass: 'toggle',
      descClass: 'description',
      createdClass: 'created',
      iconEditClass: 'icon icon-edit',
      iconDestroyClass: 'icon icon-destroy',
      checkBoxType: 'checkbox',
      label: label,
      done: false,
      id: this.idxCounter++,
      hidden: false,
    };
    return newTask;
  };

  state = {
    taskData: [],
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

  filterData = (bool1, bool2, taskData) => {
    let filteredDone = taskData.filter((task) => task.done === true);
    let filteredActive = taskData.filter((task) => task.done === false);

    let doneData = filteredDone.map((task) => {
      task.hidden = bool1;
      return task;
    });
    let activeData = filteredActive.map((task) => {
      task.hidden = bool2;
      return task;
    });
    return [...doneData, ...activeData];
  };

  onFilterCompleted = () => {
    this.setState(({ taskData }) => {
      let newData = this.filterData(false, true, taskData);
      return {
        taskData: newData,
      };
    });
  };

  onFilterActive = () => {
    this.setState(({ taskData }) => {
      let newData = this.filterData(true, false, taskData);
      return {
        taskData: newData,
      };
    });
  };

  onFilterAll = () => {
    this.setState(({ taskData }) => {
      let oldData = [...taskData];
      let newData = oldData.map((task) => {
        task.hidden = false;
        return task;
      });
      newData.sort((a, b) => a.id - b.id);
      return {
        taskData: newData,
      };
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

  onEditTask = (id, label) => {
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
        ;;
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
