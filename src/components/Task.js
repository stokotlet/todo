import React from "react";



const Task = ( { editing= false, className, desc, created, classList } ) => {
    const editField = <input type="text" className="edit" defaultValue="Editing task"/>
    return (
        <li className={className}>
            <div className={classList.viewClass}>
                <input className={classList.checkboxClass} type="checkbox"/>
                <label>
                    <span className={classList.descClass}>{desc}</span>
                    <span className={classList.createdClass}>{created}</span>
                </label>
                <button className={classList.iconEditClass}></button>
                <button className={classList.iconDestroyClass}></button>
            </div>
            {editing ? editField : null}
        </li>
    )
}

export default Task