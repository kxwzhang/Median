import React from 'react';
import { Link } from 'react-router-dom';

class StoryShow extends React.Component {
    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId);
    }

    render() {
        const { story, currentUserId } = this.props;

        if (!story) {
            return null;
        } else {
            let editStoryLink;
            if (currentUserId === story.author_id) {
                editStoryLink = (
                    <Link to={`/stories/${story.id}/edit`}>
                        <button className='edit-story-btn'>Edit story</button>
                    </Link>
                );
            }
            return (
                <div className='story-show-page'>
                    <span className='story-show-container'>
                        <div className='story-show-details'>
                            <h1 className='show-title'>{story.title}</h1>
                            <h2 className='show-subtitle'>{story.subtitle}</h2>
                            <span className='show-author'>
                                <div className='show-author-name'>{story.author}</div>
                                <div className='show-read-time'>{story.id + 2} min read</div>
                                {editStoryLink}
                            </span>
                            <img className='show-image' src={story.photoUrl} />
                            <p className='show-body'>
                                {story.body}
                            </p>

                        </div>
                    </span>
                </div>
            );
        }
    }
}

export default StoryShow;