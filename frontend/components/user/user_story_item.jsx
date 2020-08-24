import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class UserStoryItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { user, currentUser, story, deleteStory } = this.props
        let editAndDeleteButtons;
        if (user.id == currentUser.id) {
            editAndDeleteButtons = (
                <div className='user-story-btn-container'>
                    <li>
                        <Link to={`/stories/${story.id}/edit`}>
                            <button className='edit-story-btn'>Edit Story</button>
                        </Link>
                    </li>
                    <li>
                        <button className='delete-story-btn' onClick={() => deleteStory(story.id)}>Delete story</button>
                    </li>
                </div>
            );
        }
        return (
            <ul className='user-story-item-container'>
                <li>
                    <Link to={`/stories/${story.id}`}>
                        <div className='user-story-title'>{story.title}</div>
                        <div className='user-story-subtitle'>{story.subtitle}</div>
                    </Link>
                </li>
                {editAndDeleteButtons}
                <div className='user-story-divider'></div>
            </ul>
        );
    }
}

export default withRouter(UserStoryItem);