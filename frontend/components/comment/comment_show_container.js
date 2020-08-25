import { connect } from 'react-redux';
import CommentShow from './comment_show';
import { fetchComments, fetchComment } from '../../actions/comment_action';

const mSTP = state => ({
    comments: Object.values(state.entities.comments)
});

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(mSTP, mDTP)(CommentShow);