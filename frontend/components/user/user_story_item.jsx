import React from 'react';

const UserStoryItem = ({ story, deleteStory }) => (
    <ul>
        <li>{story.tile}</li>
        <li>{story.subttile}</li>
    </ul>
);

export default UserStoryItem;