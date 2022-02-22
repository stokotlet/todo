import React from 'react';

export default class Timer extends React.Component {
  startTimer = () => {
    if (!this.props.interval) {
      this.props.updateTimer(this.props.id);
    }
  };
  stopTimer = () => {
    clearInterval(this.props.interval);
    this.props.clearInterval(this.props.id);
  };

  render() {
    let playIcon = '';
    let stopIcon = '';
    let divider = '';
    let minutes;
    let seconds;
    if (this.props.timer > 0) {
      minutes = Math.floor(this.props.timer / 60);
      seconds = this.props.timer - minutes * 60;
      divider = ':';
      playIcon = 'icon icon-play';
      stopIcon = 'icon icon-pause';
    }
    if (this.props.timer === 0) {
      minutes = 'time is over';
      divider = '';
      seconds = '';
    }
    return (
      <span className="description">
        <button onClick={this.startTimer} className={playIcon}></button>
        <button onClick={this.stopTimer} className={stopIcon}></button>
        <div>
          {minutes}
          {divider}
          {seconds}
        </div>
      </span>
    );
  }
}
