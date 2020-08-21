import { connect } from 'react-redux';
import StoryForm from './story_form';
import { createStory } from '../../actions/story_action';

const mSTP = (state, ownProps) => ({

});

const mDTP = dispatch => ({
    processForm: story => dispatch(createStory(story))
});

export default connect(mSTP, mDTP)(StoryForm);
