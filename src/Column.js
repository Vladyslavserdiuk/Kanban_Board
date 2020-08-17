import React, {useState} from 'react';
import {Col} from "reactstrap";
import Task from "./Task";


function Column(props) {

  const {tasks} = props


  return (
    <div >
      <Col>
          {tasks.map(el => <Task task={el}/>)}

      </Col>

    </div>
  );
}

export default Column;
