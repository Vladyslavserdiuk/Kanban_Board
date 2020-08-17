import React, {useState} from 'react';
import './App.css';
import Container from "reactstrap/es/Container";
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
            priority: 0,
            status: 'progress'
        },
        {
            id: Math.random(),
            name: 'Third',
            priority: 0,
            status: 'review'
        },
        {
            id: Math.random(),
            name: 'Fourth',
            priority: 0,
            status: 'review'
        }
    ]


    return (
        <div>
            <Container>
                <Column taskList={taskList}/>


            </Container>

        </div>
    );
}

export default App;
