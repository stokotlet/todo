import React from "react";
import Task from "./Task";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskList = ( {className} ) => {
    const date = formatDistanceToNow(new Date())
    const classList = {
        viewClass: "view",
        checkboxClass: "toggle",
        descClass: "description",
        createdClass: "created",
        iconEditClass: "icon icon-edit",
        iconDestroyClass: "icon icon-destroy"
    }

    return (
        <ul className={className}>
            <Task className='completed' classList={classList} desc='Completed task' created={date}/>
            <Task className='editing' classList={classList} desc='Editing task' created={date} editing/>
            <Task className='' classList={classList} desc='Active task' created={date}/>
        </ul>
    )
}

export default TaskList