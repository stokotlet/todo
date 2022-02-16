import React from "react";

export default class NewTaskForm extends React.Component {
    state = {
        newTask: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            newTask: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addNewTask(this.state.newTask)
        this.setState({newTask: ''})
    }

    render(){
        return <form onSubmit={this.onSubmit}>
            <input
                className="new-todo"
                placeholder="What needs to be done?" autoFocus
                onChange={this.handleChange}
                value = {this.state.newTask}

            />
        </form>
    }
}