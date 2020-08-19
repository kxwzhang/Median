import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_action';
import { removeErrors } from '../../actions/error_action';
import { openModal, closeModal } from '../../actions/modal_action';

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
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SessionForm);