import { connect } from 'react-redux';
import SessionForm from './session_form';
import {login, signup} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  let currentUser = state.session.currentUser;
  currentUser = Boolean(currentUser);
  return ({
    loggedIn: currentUser,
    errors: state.session.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formAction;
  const formType = ownProps.location.pathname.slice(1);
  // debugger;
  if (formType==='signup') {
    formAction = (user) => dispatch(signup(user));
  } else {
    formAction = (user) => dispatch(login(user));
  }
  return ({
    processForm: formAction,
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
