import React from 'react';
import ChildCommentShow from './child_comment_show';

class CommentShow extends React.Component {
    componentDidMount() {
        // this.props.fetchComment(story)
    }

    render() {
        const { story, fetchComment } = this.props;
        console.log(story.comments);
        return (
            <div className='comment-container'>
                <div>{story.comments}</div>
                <ChildCommentShow />
            </div>
        );
    }
}

export default CommentShow;