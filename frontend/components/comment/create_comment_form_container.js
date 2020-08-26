import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import { createStory } from '../../actions/comment_action';

const mSTP = (state, ownProps) => ({
    comment: {body: ''},
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    processForm: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CreateCommentForm);