import React, {useState} from 'react';
import './App.css';
import {Container, Row} from "reactstrap";
import Column from "./Column";

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
            priority: 1,
            status: 'review'
        }
    ]
    const [tasks, setTasks] = useState(taskList)


    return (
        <div>
            <Container>
                <Row>
                    <Column tasks={tasks}/>
                </Row>

            </Container>

        </div>
    );
}

export default App;
