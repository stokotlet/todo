import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends React.Component {
  state = {
    date: new Date(),
    tick: true,
    editing: false,
    label: '',
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
    }
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.label) {
      this.props.onEditTask(this.state.label);
      this.setState({
        editing: false,
      });
    } else {
      this.setState({
        editing: false,
      });
    }
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      tick: new Date(),
    });
  }

  render() {
    let { onDeleted, onTaskDone, done, label, hidden } = this.props;
    const created = formatDistanceToNow(this.state.date, { includeSeconds: true });
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
    if (hidden) {
      mainClass = 'hidden';
    }

    return (
      <li className={mainClass}>
        <div className="view">
          <input onClick={onTaskDone} className="toggle" type="checkbox" />
          <label>
            <span className="description">{label}</span>
            <span className="created">{created}</span>
          </label>
          <button onClick={this.taskEditing} className="icon icon-edit"></button>
          <button onClick={onDeleted} className="icon icon-destroy"></button>
        </div>
        {editField}
      </li>
    );
  }
}
