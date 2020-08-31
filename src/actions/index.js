import { ADD_TASK, SHOW_TASK } from './types';
import api from '../api/api';

export const addTask = values => async dispatch => {
  let response;
  try {
    response = await api.post('/task/add', values);
    dispatch({
      type: ADD_TASK,
      payload: response.data
    });
  } catch (error) {
    alert('Task not added');
    console.log(error);
  }
};

export const showTask = () => async dispatch => {
  const response = await api.get('/task/all');
  dispatch({ type: SHOW_TASK, payload: response.data });
};
