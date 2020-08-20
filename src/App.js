import React, {useState} from 'react';
import './App.css';
import {Container, Row} from "reactstrap";
import Column from "./Column";
import AddTaskModal from "./AddTaskModal";
import AddColumnModal from "./AddColumnModal";

function App() {

    const taskList = [
        {
            id: Math.random(),
            name: 'First',
            priority: 0,
            status: 'todo'
        },
        {
            id: Math.random(),
            name: 'Second',
            priority: 1,
            status: 'progress'
        },
        {
            id: Math.random(),
            name: 'Third',
            priority: 2,
            status: 'review'
        },
        {
            id: Math.random(),
            name: 'Fourth',
            priority: 2,
            status: 'done'
        },
        {
            id: Math.random(),
            name: 'Fith',
            priority: 2,
            status: 'do again'
        }
    ]

    const columnList = [
        {
            id: Math.random(),
            title: 'To do!',
            status: 'todo'
        },
        {
            id: Math.random(),
            title: 'In progress...',
            status: 'progress'
        },
        {
            id: Math.random(),
            title: 'Need review',
            status: 'review'
        },
        {
            id: Math.random(),
            title: 'Done!!!',
            status: 'done'
        }
    ]

    const [columns, setColumns] = useState(columnList)

    const statues = ['todo', 'progress', 'review', 'done'];

    const taskPriority = [0, 1, 2];

    const [tasks, setTasks] = useState(taskList);

    const addNewColumn = (title) => {
        const newColumn = {
            id: Math.random(),
            title:title,
            status: 'Do again'
        }
        const newColumns = [...columns, newColumn]
        setColumns(newColumns)
    }

    const addNewTask = (newTitle, newPriority, newStatus) => {
        const newTask = {
            id: Math.random(),
            name: newTitle,
            priority: newPriority,
            status: newStatus
        }
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
    }

    const changeTaskStatus = (taskId, direction) => {
        const newTasks = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right')
                    el.status = statues[statues.indexOf(el.status) + 1]
                if (direction === 'left')
                    el.status = statues[statues.indexOf(el.status) - 1]
                if (direction === 'up')
                    el.priority = taskPriority[taskPriority.indexOf(el.priority) + 1]
                if (direction === 'down')
                    el.priority = taskPriority[taskPriority.indexOf(el.priority) + 1]
            }
            return el;
        })
        setTasks(newTasks)
    }

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter(el => el.id !== taskId)
        setTasks(newTasks)
    }
    return (
        <div>
            <Container>
                <AddTaskModal addNewTask={addNewTask}/>
                {" "}
                <AddColumnModal addNewColumn={addNewColumn}/>
                <Row>
                    {columns.map(el =>
                        <Column changeTaskStatus={changeTaskStatus}
                                column={el}
                                tasks={tasks}
                                deleteTask={deleteTask}
                        />)}
                </Row>

            </Container>

        </div>
    );
}

export default App;
