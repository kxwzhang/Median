import { connect } from 'react-redux';
import UserStory from './user_story';
import { fetchUser } from '../../actions/user_action';
import { fetchAllStories, deleteStory } from '../../actions/story_action';
import { openModal } from '../../actions/modal_action';

const mSTP = ({ session, entities: { stories, users } }, ownProps) => ({
    stories: Object.values(stories),
    user: users[ownProps.match.params.userId],
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAllStories: () => dispatch(fetchAllStories()),
    deleteStory: storyId => dispatch(deleteStory(storyId)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(UserStory);