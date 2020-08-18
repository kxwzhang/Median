import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_action';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Greeting);