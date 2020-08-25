import React from 'react';
import { Link } from 'react-router-dom';
import CommentShow from '../comment/comment_show';

class StoryShow extends React.Component {
    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId);
        window.scrollTo(0, 0);
    }

    render() {
        const { story, currentUserId } = this.props;

        if (!story) {
            return null;
        } else {
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
                            <CommentShow story={story} />
                        </div>
                    </span>
                </div>
            );
        }
    }
}

export default StoryShow;