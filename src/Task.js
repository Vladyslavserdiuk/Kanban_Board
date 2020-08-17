import React from 'react';
import {Col, Card, Button, CardBody} from "reactstrap";


function Task(props) {

    const {task} = props;


    return (
        <div>
            <Col>
                <Card>
                    <CardBody>
                        {task.name}
                    </CardBody>
                    <CardBody>
                        <Button>Button</Button>
                    </CardBody>
                </Card>

            </Col>

        </div>
    );
}

export default Task;
