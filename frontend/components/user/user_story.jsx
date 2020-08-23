import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserStoryItem from './user_story_item';

class UserStory extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        window.scrollTo(0,0);
    }

    componentDidUpdate(prevProps) {
        const { currentUser, fetchStory } = this.props;
        if (currentUser.stories.length !== prevProps.currentUser.stories.length) {
            currentUser.stories.forEach(story => fetchStory(story.id));
        }
    }

    render() {
        const { currentUser, deleteStory } = this.props;
        console.log(currentUser.stories);
        if (!currentUser) {
            return null;
        } else {
            return (
                <div className='user-story-container'>
                    <div className='your-stories-container'>
                        <div className='your-stories'>Your Stories</div>
                        <Link to={'/stories/new'}>
                            <button className='write-a-story-btn'>Write a story</button>
                        </Link>
                    </div>
                    <div className='user-story-stories-container'>
                        {currentUser.stories.map(story => <UserStoryItem key={story.id} currentUser={currentUser} story={story} deleteStory={deleteStory} />)}
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(UserStory);