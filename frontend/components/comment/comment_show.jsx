import React from 'react';
import CommentShowContainer from './comment_show_container';
import { Link } from 'react-router-dom';

class CommentShow extends React.Component {
    componentDidMount() {
        const {story, fetchComment, fetchComments } = this.props;
        Object.values(story.commentsByParent).forEach(array => {
            array.forEach(comment => {
                fetchComment(comment.id);
            })
        });
    }
    
    render() {
        const { story, comment, commentsByParent, commenters } = this.props;
        if (!comment) {
            return null;
        } else {
            const nestedComments = (commentsByParent[comment.id] || []).map(comment => {
                return (
                    <CommentShowContainer
                        key={comment.id}
                        story={story}
                        comment={comment}
                        commenters={commenters}
                        commentsByParent={commentsByParent} />
                );
            });
            return (
                <div className='comment-container'>
                    <div>
                        <div className='comment-head'>
                            <div className='commenter-name'>{commenters[comment.commenter_id]}</div>
                        </div>
                        <div className='comment-text'>
                            <div className='commenter-body'>{comment.body}</div>
                        </div>
                        <Link to='comments/new'>
                            <i class="far fa-comment"></i>
                        </Link>
                        <div className='nested-comments'>
                            {nestedComments}
                        </div>
                    </div>
               </div>
            );
        }
    }
}

export default CommentShow;