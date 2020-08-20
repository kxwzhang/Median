import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexItem = ({ story }) => (
    <div className='story-index-item'>
        <div className='story-details'>
            <h1>{story.title}</h1>
            <h2>{story.subtitle}</h2>
            <h3>{story.body}</h3>
        </div>
    </div>
);

export default StoryIndexItem;
