import React from 'react';

import Timer from '../timer/timer';
import CreatedDate from '../created-date/created-date';

export default class Task extends React.Component {
  state = {
    editing: false,
  };

  taskEditing = () => {
    this.setState((state) => {
      return { editing: !state.editing };
    });
  };

  onchangeHandler = (e) => {
    if (e.target.value) {
      this.setState({
        label: e.target.value,
      });
    } else {
      this.setState({
        label: '',
      });
    }
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.label) {
      this.props.onEditTask(this.state.label, this.props.id);
      this.setState({
        editing: false,
      });
    } else {
      this.setState({
        editing: false,
      });
    }
  };

  render() {
    let { onDeleted, onTaskDone, done, label, id, timer, updateTimer, interval, clearInterval } = this.props;
    const editField = (
      <form onSubmit={this.onSubmitHandler}>
        <input onChange={this.onchangeHandler} type="text" className="edit" defaultValue={label} />
      </form>
    );
    let mainClass = 'active';
    if (done) {
      mainClass = 'completed';
    }
    if (this.state.editing) {
      mainClass = 'editing';
    }

    return (
      <li className={mainClass}>
        <div className="view">
          {done ? (
            <input onClick={() => onTaskDone(id)} className="toggle" checked readOnly type="checkbox" />
          ) : (
            <input onClick={() => onTaskDone(id)} className="toggle" readOnly type="checkbox" />
          )}
          <label>
            <span className="title">{label}</span>
            <Timer timer={timer} id={id} updateTimer={updateTimer} interval={interval} clearInterval={clearInterval} />
            <CreatedDate />
          </label>
          <button onClick={this.taskEditing} className="icon icon-edit"></button>
          <button onClick={() => onDeleted(id)} className="icon icon-destroy"></button>
        </div>
        {editField}
      </li>
    );
  }
}
