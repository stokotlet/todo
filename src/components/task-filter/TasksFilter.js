import React from 'react';
import './task-filter.css';

export default class TasksFilter extends React.Component {
  state = {
    all: true,
    active: false,
    completed: false,
  };

  allHandler = () => {
    this.setState({
      all: true,
      active: false,
      completed: false,
    });
    this.props.onFilterAll();
  };

  activeHandler = () => {
    this.setState({
      all: false,
      active: true,
      completed: false,
    });
    this.props.onFilterActive();
  };

  completedHandler = () => {
    this.setState({
      all: false,
      active: false,
      completed: true,
    });
    this.props.onFilterCompleted();
  };

  render() {
    return (
      <ul className="filters">
        <li>
          <button onClick={this.allHandler} className={this.state.all ? 'selected' : null}>
            All
          </button>
        </li>
        <li>
          <button onClick={this.activeHandler} className={this.state.active ? 'selected' : null}>
            Active
          </button>
        </li>
        <li>
          <button onClick={this.completedHandler} className={this.state.completed ? 'selected' : null}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
