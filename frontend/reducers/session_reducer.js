import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT} from '../actions/session_actions';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  debugger
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
