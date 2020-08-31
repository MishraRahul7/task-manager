import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form
} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-bi/pencil';
import trashIcon from '@iconify/icons-bi/trash';
import '../stylesheets/task.css';
import { Formik } from 'formik';
import { addTask, showTask } from '../actions';
import * as yup from 'yup';

const taskSchema = yup.object().shape({
  taskTitle: yup
    .string()
    .required()
    .max(20, 'Title is Too Long')
    .min(3, 'Title is Too short'),
  taskDescription: yup
    .string()
    .required()
    .max(100, 'Description is too Long')
    .min(10, 'Description is too short')
});
const Task = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.allTasks.tasks);

  useEffect(() => {
    dispatch(showTask());
  }, [dispatch]);

  if (!data) {
    return null;
  }
  return (
    <Container fluid className='root'>
      <Formik
        initialValues={{ taskTitle: '', taskDescription: '' }}
        validationSchema={taskSchema}
        onSubmit={async values => {
          dispatch(addTask(values));
          dispatch(showTask());
        }}
      >
        {({ values, handleChange, errors, touched, isValid, handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit} className='form'>
            <Row>
              <Col>
                <InputGroup className='mb-3' style={{ width: '50%' }}>
                  <FormControl
                    placeholder='Enter Task'
                    type='text'
                    name='taskTitle'
                    value={values.taskTitle}
                    onChange={handleChange}
                    isValid={touched.taskTitle && !errors.taskTitle}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup style={{ width: '50%' }}>
                  <FormControl
                    as='textarea'
                    aria-label='With textarea'
                    name='taskDescription'
                    placeholder='Task Description'
                    value={values.taskDescription}
                    onChange={handleChange}
                    isValid={touched.taskDescription && !errors.taskDescription}
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant='primary' type='submit'>
                  Add
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                {data.map((value, key) => (
                  <div>
                    <p className='paragraphtask'>
                      {value.taskTitle}&nbsp;&nbsp;&nbsp;
                      {value.taskDescription}
                    </p>
                    <span>
                      <Icon icon={trashIcon} />
                      <Icon icon={pencilIcon} />
                    </span>
                  </div>
                ))}
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Task;
