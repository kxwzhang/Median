import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import { createComment } from '../../actions/comment_action';
import { fetchStory } from '../../actions/story_action';

const mSTP = (state, ownProps) => ({
    comment: {body: ''},
    storyId: ownProps.story.id,
    parentCommentId: (ownProps.comment ? ownProps.comment.id : null),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    processForm: comment => dispatch(createComment(comment)),
    fetchStory: storyId => dispatch(fetchStory(storyId))
});

export default connect(mSTP, mDTP)(CreateCommentForm);