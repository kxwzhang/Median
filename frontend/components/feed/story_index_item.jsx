import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexItem = ({ story }) => (
    <div className='story-index-item'>
        <div className='story-index-details'>
            <Link to={`/stories/${story.id}`}>
                <div className='reading-history'>BASED ON YOUR READING HISTORY</div>
                <h1 className='story-index-title'>{story.title}</h1>
                <h2 className='story-index-subtitle'>{story.subtitle}</h2>
            </Link>
            <Link to={`/users/${story.author_id}/profile`}>
                <h3 className='story-index-author'>{story.author}</h3>
            </Link>
            <Link to={`/stories/${story.id}`}>
                <h4 className='item-min-read'>{story.id % 7 + 4} min read 
                <i className="fas fa-star"></i></h4> 
            </Link>
        </div>
        <div className='story-index-image'>
            <Link to={`/stories/${story.id}`}>
                <img src={story.photoUrl} />
            </Link>
        </div>
    </div>
);

export default StoryIndexItem;
