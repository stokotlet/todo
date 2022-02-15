import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


export default class Task extends React.Component {
    state = {
        taskDone: false,
        editing: false,
        createNewTask: false,
    }

    taskCompleted = () => {
        this.setState(state => {
            return {taskDone: !state.taskDone}
        })
    }

    taskEditing = () => {
        this.setState(state => {
            return {editing: !state.editing}
        })
    }

    render() {
        const created = formatDistanceToNow(new Date())
        const editField = <input type="text" className="edit" defaultValue="Editing task"/>
        const { viewClass, checkboxClass, checkBoxType, descClass,
            createdClass, iconEditClass, iconDestroyClass, onDeleted} = this.props
        return (
            <li className={this.state.taskDone ? 'completed' : this.state.editing ? 'editing' : 'active'}>
                <div className={viewClass}>
                    <input onClick={this.taskCompleted.bind(this)} className={checkboxClass} type={checkBoxType}/>
                    <label>
                        <span className={descClass}>Some task</span>
                        <span className={createdClass}>{created}</span>
                    </label>
                    <button onClick={this.taskEditing.bind(this)} className={iconEditClass}></button>
                    <button onClick={onDeleted} className={iconDestroyClass}></button>
                </div>
                {editField}
            </li>
        )
    }
}