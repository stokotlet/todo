import React from "react";

const NewTaskForm = ( {className, placeholder} ) => {
    return <input className={className} placeholder={placeholder} autoFocus />
}

export default NewTaskForm