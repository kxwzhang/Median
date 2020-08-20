import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexItem = ({ story }) => (
    <div className='story-index-item'>
        <div className='story-index-details'>
            <h1 className='story-index-title'>{story.title}</h1>
            <h2 className='story-index-subtitle'>{story.subtitle}</h2>
            <h3 className='story-index-body'>{story.body}</h3>
            <h4 className='story-index-author'>{story.author}</h4>
        </div>
    </div>
);

export default StoryIndexItem;
