import { ADD_TASK, SHOW_TASK } from '../actions/types';

const INITIAL_STATE = { task: null, tasks: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: action.payload };
    case SHOW_TASK:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
