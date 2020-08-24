import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import UserStoryItem from './user_story_item';

class UserStory extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { fetchAllStories, fetchUser } = this.props;
        fetchAllStories();
        fetchUser(this.props.match.params.userId);
        window.scrollTo(0,0);
    }

    render() {
        const { stories, user, currentUser, deleteStory } = this.props;
        if (!currentUser) {
            return null;
        } else {
            // console.log(currentUser.storyIds);
            // let myStories;
            // myStories = currentUser.storyIds.map(storyId => {
            //     console.log(stories.storyId);
            //     return stories[storyId];
            // });


            const myStories = [];
            user.storyIds.forEach(storyId => {
                stories.forEach(story => {
                    if (story.id === storyId) {
                        myStories.push(story);
                    }
                })
            }) 
            console.log(myStories);

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
                        {myStories.map(story => <UserStoryItem key={story.id} user={user} currentUser={currentUser} story={story} deleteStory={deleteStory} />)}
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(UserStory);