import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, removeSessionErrors } from '../../actions/session_action';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Login'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);