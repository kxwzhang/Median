import { connect } from 'react-redux';
import StoryShow from './story_show';
import { fetchStory } from '../../actions/story_action';

const mSTP = (state, ownProps) => ({
    story: state.entities.stories[ownProps.match.params.storyId]
});

const mDTP = dispatch => ({
    fetchStory: storyId => dispatch(fetchStory(storyId))
});

export default connect(mSTP, mDTP)(StoryShow);