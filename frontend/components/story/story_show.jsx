import React from 'react';
import { Link } from 'react-router-dom';
import CommentShowContainer from '../comment/comment_show_container';
import CommentShow from '../comment/comment_show';

class StoryShow extends React.Component {
    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId);
        window.scrollTo(0, 0);
    }

    render() {
        const { story } = this.props;
        if (!story) {
            return null;
        } else {
            let displayComments;
            if (story.commentsByParent) {
                if (Object.keys(story.commentsByParent) !== null) {
                    displayComments = story.commentsByParent[''].map(comment => {
                        return (
                            <CommentShowContainer
                                key={comment.id}
                                story={story}
                                comment={comment}
                                commentsByParent={story.commentsByParent} />
                        );
                    })
                } else {
                    displayComments = null;
                }
            } else {
                displayComments = null;
            }
            
            return (
                <div className='story-show-page'>
                    <span className='story-show-container'>
                        <div className='story-show-details'>
                            <h1 className='show-title'>{story.title}</h1>
                            <h2 className='show-subtitle'>{story.subtitle}</h2>
                            <span className='show-author'>
                                <div className='show-author-name'>{story.author}</div>
                                <div className='show-read-time'>{story.id % 7 + 4} min read</div>
                            </span>
                            <img className='show-image' src={story.photoUrl} />
                            <p className='show-body'>
                                {story.body}
                            </p>
                            <CommentShowContainer story={story} />
                        </div>
                    </span>
                    <span className='story-show-comment-container'>
                        {displayComments}
                    </span>
                </div>
            );
        }
    }
}

export default StoryShow;