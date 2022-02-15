import React from "react";
import ReactDOM from 'react-dom'
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import './index.css'


class App extends React.Component {
    state = {
        taskData: [
            {
                viewClass: "view",
                checkboxClass: "toggle",
                descClass: "description",
                createdClass: "created",
                iconEditClass: "icon icon-edit",
                iconDestroyClass: "icon icon-destroy",
                checkBoxType: 'checkbox',
                id:1
            },
            {
                viewClass: "view",
                checkboxClass: "toggle",
                descClass: "description",
                createdClass: "created",
                iconEditClass: "icon icon-edit",
                iconDestroyClass: "icon icon-destroy",
                checkBoxType: 'checkbox',
                id:2
            },
            {
                viewClass: "view",
                checkboxClass: "toggle",
                descClass: "description",
                createdClass: "created",
                iconEditClass: "icon icon-edit",
                iconDestroyClass: "icon icon-destroy",
                checkBoxType: 'checkbox',
                id:3
            },
        ]
    }

    deleteTask = (id) => {
        this.setState(({taskData}) => {
            const idx = taskData.findIndex((task) => task.id === id)
            const newTaskData = [
                ...taskData.slice(0, idx), ...taskData.slice(idx + 1)
            ]
            return {
                taskData: newTaskData
            }
        })
}

    render(){
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todo</h1>
                    <NewTaskForm className="new-todo" placeholder="What needs to be done?"/>
                </header>
                <section className="main">
                    <TaskList taskData = {this.state.taskData} onDeleted={this.deleteTask}/>
                </section>
                <Footer className="footer"/>
            </section>
        )
    }
    }


ReactDOM.render(<App />, document.getElementById('root'))