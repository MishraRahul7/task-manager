import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "../stylesheets/showTask.css"

const ShowTask = () => {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }} className="root">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='secondary'>Edit</Button>&nbsp;&nbsp;
          <Button variant='danger'>Delete</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default ShowTask;
