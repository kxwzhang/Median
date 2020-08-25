import React from 'react';

class CommentShow extends React.Component {
       

    render() {
        const { story } = this.props;
        console.log(story.comments);
        return (
            <div className='comment-container'>
                <div>{story.comments}</div>
            </div>
        );
    }
}

export default CommentShow;