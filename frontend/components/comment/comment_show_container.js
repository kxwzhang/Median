import { connect } from 'react-redux';
import CommentShow from './comment_show';
import { fetchComment } from '../../actions/comment_action';

// const mSTP = state => ({
// });

const mDTP = dispatch => ({
    fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(mSTP, mDTP)(CommentShow);