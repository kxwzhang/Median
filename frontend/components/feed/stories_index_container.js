import { connect } from 'react-redux';
import { fetchAllStories } from '../../actions/story_action';
import StoriesIndex from './stories_index';

const mSTP = state => ({
    stories: Object.values(state.entities.stories)
});

const mDTP = dispatch => ({
    fetchAllStories: () => dispatch(fetchAllStories())
});

export default connect(mSTP, mDTP)(StoriesIndex);