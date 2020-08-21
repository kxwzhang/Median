import { connect } from 'react-redux';
import StoryForm from './story_form';
import { createStory } from '../../actions/story_action';

const mSTP = state => ({
    story: {title: '', subtitle: '', body: ''},
    formType: 'Publish',
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    processForm: story => dispatch(createStory(story))
});

export default connect(mSTP, mDTP)(StoryForm);
