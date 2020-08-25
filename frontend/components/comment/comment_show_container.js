import { connect } from 'react-redux';
import CommentShow from './comment_show';
import { fetchComment } from '../../actions/comment_action';

// const mSTP = (state, ownProps) => ({

// });

const mDTP = dispatch => ({
    fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(null, mDTP)(CommentShow);