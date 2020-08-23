import React from 'react';

const UserStoryItem = ({ story, deleteStory }) => (
    <ul>
        <li>{story.title}</li>
        <li>{story.subtitle}</li>
    </ul>
);

export default UserStoryItem;