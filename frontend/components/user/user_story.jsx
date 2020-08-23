import React from 'react';
import { withRouter } from 'react-router-dom';

class UserStory extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    render() {
        const { currentUser, deleteStory } = this.props
        if (!currentUser.stories) {
            return null;
        } else {
            return (
                <div className='user-story-container'>
                    <div className='your-stories-container'>
                        <div className='your-stories'>Your Stories</div>
                        <button className='write-a-story-btn'>Write a story</button>
                    </div>
    
                </div>
            );
        }
    }
}

export default withRouter(UserStory);