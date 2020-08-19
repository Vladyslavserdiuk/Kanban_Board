import React, {useState} from 'react';
import './App.css';
import {Container, Row} from "reactstrap";
import Column from "./Column";
import Controller from "./Controller";

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
            status: 'todo'
        },
        {
            id: Math.random(),
            name: 'Third',
            priority: 2,
            status: 'todo'
        },
        {
            id: Math.random(),
            name: 'Fourth',
            priority: 2,
            status: 'todo'
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

    const statues = ['todo', 'progress', 'review', 'done'];

    const taskPriority = [0, 1, 2];

    const [tasks, setTasks] = useState(taskList);

    const addNewTask = (newTitle) => {
        const newTask = {
            id: Math.random(),
            name: newTitle,
            priority: 0,
            status: 'todo'
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

    return (
        <div>
            <Container>
                <Controller addNewTask={addNewTask}/>
                <Row>
                    {columnList.map(el => <Column changeTaskStatus={changeTaskStatus} column={el} tasks={tasks}/>)}
                    {/*<Column changeTaskStatus={changeTaskStatus} title={'todo'} tasks={tasks}/>*/}
                    {/*<Column changeTaskStatus={changeTaskStatus} title={'progress'} tasks={tasks}/>*/}
                    {/*<Column changeTaskStatus={changeTaskStatus} title={'review'} tasks={tasks}/>*/}
                    {/*<Column changeTaskStatus={changeTaskStatus} title={'done'} tasks={tasks}/>*/}
                </Row>

            </Container>

        </div>
    );
}

export default App;
