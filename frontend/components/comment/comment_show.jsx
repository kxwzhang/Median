import React from 'react';
import CommentShowContainer from './comment_show_container';

class CommentShow extends React.Component {
    componentDidMount() {
        const {story, fetchComment } = this.props;
        Object.values(story.commentsByParent).forEach(array => {
            array.forEach(comment => {
                fetchComment(comment.id);
            })
        });
    }
    
    render() {
        const { story, comment, comments, commentsByParent, commenters } = this.props;
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
                    <div>{commenters[comment.commenter_id]}</div>
                    <div>{comment.body}</div>
                    {nestedComments}
               </div>
            );
        }
    }
}

export default CommentShow;