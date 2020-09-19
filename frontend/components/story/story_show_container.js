import { connect } from 'react-redux';
import StoryShow from './story_show';
import { fetchStory, likeStory, unlikeStory } from '../../actions/story_action';

const mSTP = (state, ownProps) => ({
    story: state.entities.stories[ownProps.match.params.storyId],
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    fetchStory: storyId => dispatch(fetchStory(storyId)),
    likeStory: id => dispatch(likeStory(id)),
    unlikeStory: id => dispatch(unlikeStory(id))
});

export default connect(mSTP, mDTP)(StoryShow);