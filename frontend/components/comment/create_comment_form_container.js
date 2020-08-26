import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import { createComment } from '../../actions/comment_action';

const mSTP = (state, ownProps) => ({
    comment: {body: ''},
    storyId: ownProps.story.id,
    parentCommentId: ownProps.comment.id,
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    processForm: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CreateCommentForm);