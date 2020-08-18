import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_action';
import { openModal } from '../../actions/modal_action';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Greeting);