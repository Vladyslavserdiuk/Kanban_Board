import React from 'react';
import {Col} from "reactstrap";
import Task from "./Task";


function Column(props) {

    const {tasks, title, changeTaskStatus} = props


    return (
        <div>
            <Col>
                <h3>{title}</h3>
                {tasks
                    .filter(el => el.status === title)
                    .sort((a, b) => b.priority - a.priority)
                    .map(el =>
                        <Task
                            task={el}
                            changeTaskStatus={changeTaskStatus}
                        />)}

            </Col>

        </div>
    );
}

export default Column;
