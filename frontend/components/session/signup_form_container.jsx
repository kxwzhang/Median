import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, removeSessionErrors } from '../../actions/session_action';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Signup'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>Login</button>
    ),
    closeModal: () => dispatch(closeModal()),
    removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(mSTP, mDTP)(SessionForm);