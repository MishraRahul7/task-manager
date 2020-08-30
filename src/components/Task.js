import React from 'react';
import AddTask from './AddTask';
import ShowTask from './ShowTask';
import { Container } from 'react-bootstrap';
import "../stylesheets/task.css";
const Task = () => {
  return (
      <Container  className="root">
        <AddTask />
        <ShowTask />
      </Container>
  );
};

export default Task;
