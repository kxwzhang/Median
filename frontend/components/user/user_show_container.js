import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_action';
import { fetchStory, createStory } from '../../actions/story_action';

const mSTP = () => ({

});

const mDTP = dispatch => ({

});

export default connect (mSTP, mDTP)(UserShow);