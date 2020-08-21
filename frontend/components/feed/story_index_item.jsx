import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexItem = ({ story }) => (
    <div className='story-index-item'>
        <div className='story-index-details'>
            <Link to={`/stories/${story.id}`}>
                <div className='reading-history'>BASED ON YOUR READING HISTORY</div>
                <h1 className='story-index-title'>{story.title}</h1>
                <h2 className='story-index-subtitle'>{story.subtitle}</h2>
                <h3 className='story-index-author'>{story.author}</h3>
                <h4 className='item-min-read'>{story.id + 2} min read</h4> 
            </Link>
        </div>
    </div>
);

export default StoryIndexItem;
