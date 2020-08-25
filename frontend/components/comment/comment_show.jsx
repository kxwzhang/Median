import React from 'react';
import ChildCommentShow from './child_comment_show';

class CommentShow extends React.Component {
    componentDidMount() {
        const {story, fetchComment } = this.props;
        Object.values(story.comments).forEach(comment => {
            fetchComment(comment.id);
        });
        // fetch story again
    }

    render() {
        const { story, comments } = this.props;
        if (!comments) {
            return null;
        } else {
            const parentComments = [];
            comments.forEach(comment => {
                if (!comment.parent_comment_id) {
                    parentComments.push(comment);
                }
            })
            return (
                <div className='comment-container'>
                    <div>{parentComments.map(comment => comment.body)}</div>
                    <ChildCommentShow />
                </div>
            );
        }
    }
}

export default CommentShow;