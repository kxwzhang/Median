import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_action';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'login'
});