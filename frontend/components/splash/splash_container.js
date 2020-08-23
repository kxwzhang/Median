import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import { openModal } from '../../actions/modal_action';

const mDTP = dispatch => ({
    openModal: () => dispatch(openModal('signup')),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>Login</button>
    )
});

export default connect(null, mDTP)(Splash);
