import { connect } from 'react-redux';
import Splash from './splash';
import { openModal, closeModal } from '../../actions/modal_action';

const mDTP = dispatch => ({
    openModal: () => dispatch(openModal('signup'))
});

export default connect(null, mDTP)(Splash);
