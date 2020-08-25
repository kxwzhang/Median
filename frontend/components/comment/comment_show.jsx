import React from 'react';
import ChildCommentShow from './child_comment_show';

class CommentShow extends React.Component {
    componentDidMount() {
        const {story, fetchComment } = this.props;
        Object.values(story.commentsByParent).forEach(array => {
            array.forEach(commentId => {
                fetchComment(commentId)
            })
        })
    }

    render() {
        // const { story } = this.props;
        // console.log(Object.values(story.commentsByParent));
        console.log(this.props);
        return (
            <div className='comment-container'>
                <div></div>
                <ChildCommentShow />
            </div>
        );
    }
}

export default CommentShow;