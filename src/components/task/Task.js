import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


export default class Task extends React.Component {
    state = {
        editing: false,
        createNewTask: false,
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
            createdClass, iconEditClass, iconDestroyClass, onDeleted, onTaskDone, done, label, hidden} = this.props
        let mainClass = 'active'
        if (done) {mainClass = 'completed'}
        if (this.state.editing) {mainClass = 'editing'}
        if (hidden) {mainClass = 'hidden'}

        return (
            <li className={mainClass}>
                <div className={viewClass} >
                    <input onClick={onTaskDone} className={checkboxClass} type={checkBoxType}/>
                    <label>
                        <span className={descClass}>{label}</span>
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