import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class CreatedDate extends React.Component {
  state = {
    date: new Date(),
    tick: true,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 30000);
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
    const created = formatDistanceToNow(this.state.date);
    return <span className="description">{created}</span>;
  }
}
