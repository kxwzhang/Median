import React from 'react';

const StoryIndexTop = ({ stories }) => (
    <div className='story-index-top'>
        <div className='left-top'>
            <h1>{stories[0].title}</h1>
            <h2>{stories[0].subtitle}</h2>
            <h3>By {stories[0].author}</h3>
        </div>

        <div className='center-top'>
            <span>
                <div className="top-details">
                    <h1>{stories[1].title}</h1>
                    <h2>{stories[1].subtitle}</h2>
                    <h3>{stories[1].author}</h3>
                </div>
            </span>
            <span>
                <div className='top-details'>
                    <h1>{stories[2].title}</h1>
                    <h2>{stories[2].subtitle}</h2>
                    <h3>{stories[2].author}</h3>
                </div>
            </span>
            <span>
                <div className='top-details'>
                    <h1>{stories[3].title}</h1>
                    <h2>{stories[3].subtitle}</h2>
                    <h3>{stories[3].author}</h3>
                </div>
            </span>
        </div>

        <div className='right-top'>
            <h1>{stories[4].title}</h1>
            <h2>{stories[4].subtitle}</h2>
            <h3>{stories[4].author}</h3>
            <div className='editors-picks'>
                SEE EDITOR'S PICKS 
            </div>
        </div>
    </div>
);

export default StoryIndexTop;