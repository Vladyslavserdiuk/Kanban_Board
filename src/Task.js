import React from 'react';
import {Col, Card, Button, CardBody, Alert} from "reactstrap";


function Task(props) {

    const alertColors = ['success', 'warning', 'danger']

    const {task, changeTaskStatus} = props;

    return (
        <div>
            <Col>
                <Card>
                    <CardBody>
                        {task.name}
                        <Alert color={alertColors [task.priority]}>
                            {task.priority !== 0 &&
                            <Button onClick={() => changeTaskStatus(task.id, 'up')} size="sm">↑</Button>}
                            {" "}
                            {task.priority !== 2 &&
                            <Button onClick={() => changeTaskStatus(task.id, 'down')} size="sm">↓</Button>}
                        </Alert>

                    </CardBody>
                    <CardBody>
                        {task.status !== 'todo' &&
                        <Button onClick={() => changeTaskStatus(task.id, 'left')}>←</Button>}
                        {" "}
                        {task.status !== 'done' &&
                        <Button onClick={() => changeTaskStatus(task.id, 'right')}>→</Button>}


                    </CardBody>
                </Card>

            </Col>

        </div>
    );
}

export default Task;
