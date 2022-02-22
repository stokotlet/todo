import React from 'react';

import './new-task-form.css';

export default class NewTaskForm extends React.Component {
  state = {
    newTaskName: '',
    min: '',
    sec: '',
  };

  handleChange = (e) => {
    e.preventDefault();
    if (e.target.value) {
      this.setState({
        newTaskName: e.target.value,
      });
    } else {
      this.setState({
        newTaskName: '',
      });
    }
  };

  onChangeMin = (e) => {
    if (e.target.value && !isNaN(Number(e.target.value))) {
      let time = Number(e.target.value);
      this.setState({
        min: time,
      });
    } else {
      this.setState({
        min: '',
      });
    }
  };

  onChangeSec = (e) => {
    if (e.target.value && !isNaN(Number(e.target.value))) {
      this.setState({
        sec: Number(e.target.value),
      });
    } else {
      this.setState({
        sec: '',
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.newTaskName) {
      this.props.addNewTask(this.state.newTaskName, this.state.sec + this.state.min * 60);
      this.setState({
        newTaskName: '',
        sec: '',
        min: '',
      });
    }
  };

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.handleChange}
          value={this.state.newTaskName}
        />
        <input
          type="text"
          onChange={this.onChangeMin}
          className="new-todo-form__timer"
          autoFocus
          placeholder="Min"
          value={this.state.min}
        />
        <input
          type="text"
          onChange={this.onChangeSec}
          className="new-todo-form__timer"
          autoFocus
          placeholder="Sec"
          value={this.state.sec}
        />
        <input type="submit" className="submit-btn" />
      </form>
    );
  }
}
