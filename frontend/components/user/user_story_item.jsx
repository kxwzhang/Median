import React from 'react';
import { Link } from 'react-router-dom';

const UserStoryItem = ({ story, deleteStory }) => (
    <ul className='user-story-item-container'>
        <li>
            <div>{story.title}</div>
            <div>{story.subtitle}</div>
        </li>
        <li>
            <Link to={`/stories/${story.id}/edit`}>
                <button className='edit-story-btn'>Edit Story</button>
            </Link>
        </li>
        <li>
            <button className='delete-story-btn' onClick={deleteStory}>Delete story</button>
        </li>
        <div className='user-story-divider'></div>
    </ul>
);

export default UserStoryItem;