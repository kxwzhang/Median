import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../util/user_api_util';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(UserProfile);