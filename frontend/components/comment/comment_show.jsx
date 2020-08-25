import React from 'react';
import ChildCommentShow from './child_comment_show';

class CommentShow extends React.Component {
    componentDidMount() {
        const {story, fetchComment } = this.props;
        Object.values(story.commentsByParent).forEach(array => {
            array.forEach(comment => {
                // fetchComment(comment.id)
                console.log(comment.id);
            })
        })
    }

    render() {
        const { story } = this.props;
        console.log(Object.values(story.commentsByParent));
        console.log(this.props);
        // debugger
        return (
            <div className='comment-container'>
                <div></div>
                <ChildCommentShow />
            </div>
        );
    }
}

export default CommentShow;