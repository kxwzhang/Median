import { connect } from 'react-redux';
import { fetchAllStories } from '../../actions/story_action';
import StoriesIndex from './stories_index';

const mSTP = state => ({
    stories: Object.values(state.entities.stories)
});

const mDTP = dispatch => ({
    fetchAllStories: () => dispatch(fetchAllStories()),
    shuffleStories: stories => {
        let i = stories.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [stories[i], stories[j]] = [stories[j], stories[i]];
        }
        return stories;
    }
});

export default connect(mSTP, mDTP)(StoriesIndex);