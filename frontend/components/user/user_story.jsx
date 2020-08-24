import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserStoryItem from './user_story_item';

class UserStory extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { currentUser, fetchUser, fetchAllStories } = this.props;
        fetchUser(this.props.match.params.userId);
        window.scrollTo(0,0);
    }

    render() {
        const { stories, currentUser, deleteStory } = this.props;
        if (!currentUser.storyIds) {
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
                    <div className='user-story-divider'></div>
                    <div className='user-story-stories-container'>
                        {currentUser.storyIds.map(storyId => <UserStoryItem key={storyId} currentUser={currentUser} story={stories[storyId]} deleteStory={deleteStory} />)}
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(UserStory);