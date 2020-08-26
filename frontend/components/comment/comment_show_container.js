import { connect } from 'react-redux';
import CommentShow from './comment_show';
import { fetchComments, fetchComment, deleteComment } from '../../actions/comment_action';
import { fetchStory } from '../../actions/story_action';

const mSTP = state => ({
    comments: Object.values(state.entities.comments),
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    fetchStory: storyId => dispatch(fetchStory(storyId)),
    fetchComments: () => dispatch(fetchComments()),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mSTP, mDTP)(CommentShow);