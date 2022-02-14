import React from "react";
import ReactDOM from 'react-dom'
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import './index.css'

const App = () => {
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todo</h1>
                <NewTaskForm className="new-todo" placeholder="What needs to be done?"/>
            </header>
            <section className="main">
                <TaskList className="todo-list"/>
            </section>
            <Footer className="footer"/>
        </section>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))