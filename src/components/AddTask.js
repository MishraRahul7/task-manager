import React from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import "../stylesheets/addTask.css"

const AddTask = () => {
  return (
    <Container className="root">
      <Row>
        <Col>
          <InputGroup className='mb-3' style={{ width: '50%' }}>
            <InputGroup.Prepend>
              <InputGroup.Text>Task Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup style={{ width: '50%' }}> 
            <InputGroup.Prepend>
              <InputGroup.Text>Task Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as='textarea' aria-label='With textarea' />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='primary'>Add</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTask;
