import React from 'react';
import { withRouter } from 'react-router-dom';
import UserStoryItem from './user_story_item';

class UserStory extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
        console.log(this.props.currentUser.stories);
    }

    render() {
        const { currentUser, deleteStory } = this.props;
        console.log(currentUser.stories);
        if (!currentUser.stories) {
            return null;
        } else {
            return (
                <div className='user-story-container'>
                    <div className='your-stories-container'>
                        <div className='your-stories'>Your Stories</div>
                        <button className='write-a-story-btn'>Write a story</button>
                    </div>
                    <div className='user-story-stories-container'>
                        {currentUser.stories.map(story => <UserStoryItem story={story} deleteStory={deleteStory} />)}
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(UserStory);