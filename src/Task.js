import React from 'react';
import {Col} from "reactstrap";


function Task(props) {

  const {task} = props;


  return (
    <div >
      <Col>
          {task.name}

      </Col>

    </div>
  );
}

export default Task;
