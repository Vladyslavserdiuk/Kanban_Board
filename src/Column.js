import React, {useState} from 'react';
import {Col} from "reactstrap";
import Task from "./Task";


function Column(props) {

    const {tasks, title} = props


    return (
        <div>
            <Col>
                <h3>{title}</h3>
                {tasks
                    .filter(el => el.status === title)
                    .map(el => <Task task={el}/>)}

            </Col>

        </div>
    );
}

export default Column;
