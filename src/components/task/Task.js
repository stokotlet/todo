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
    let {
      viewClass,
      checkboxClass,
      checkBoxType,
      descClass,
      createdClass,
      iconEditClass,
      iconDestroyClass,
      onDeleted,
      onTaskDone,
      done,
      label,
      hidden,
    } = this.props;
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
        <div className={viewClass}>
          <input onClick={onTaskDone} className={checkboxClass} type={checkBoxType} />
          <label>
            <span className={descClass}>{label}</span>
            <span className={createdClass}>{created}</span>
          </label>
          <button onClick={this.taskEditing} className={iconEditClass}></button>
          <button onClick={onDeleted} className={iconDestroyClass}></button>
        </div>
        {editField}
      </li>
    );
  }
}
