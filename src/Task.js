import React from 'react';
import {Col, Card, Button, CardBody} from "reactstrap";


function Task(props) {

    const {task, changeTaskStatus} = props;


    return (
        <div>
            <Col>
                <Card>
                    <CardBody>
                        {task.name}
                    </CardBody>
                    <CardBody>
                        {task.status !== 'todo' &&
                        <Button onClick={()=>changeTaskStatus(task.id, 'left')}>←</Button>}
                        {task.status !== 'done' &&
                        <Button onClick={()=>changeTaskStatus(task.id, 'right')}>→</Button>}


                    </CardBody>
                </Card>

            </Col>

        </div>
    );
}

export default Task;
