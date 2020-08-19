import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_action';
import { removeErrors } from '../../actions/error_action';
import { openModal, closeModal } from '../../actions/modal_action';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Login'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>Signup</button>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SessionForm);