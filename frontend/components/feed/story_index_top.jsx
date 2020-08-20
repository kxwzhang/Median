import React from 'react';

const StoryIndexTop = ({ stories }) => (
    <div className='story-index-top'>
        <div className='left-top'>
            DUUUUUUDE
            <h1>{stories[0].title}</h1>
            <h1>{stories[0].subtitle}</h1>
            <h1>{stories[0].author}</h1>
        </div>

        <div className='center-top'>
            <span>
                <h1>{stories[1].title}</h1>
                <h1>{stories[1].subtitle}</h1>
                <h1>{stories[1].author}</h1>
            </span>
            <span>
                <h1>{stories[2].title}</h1>
                <h1>{stories[2].subtitle}</h1>
                <h1>{stories[2].author}</h1>
            </span>
            <span>
                <h1>{stories[3].title}</h1>
                <h1>{stories[3].subtitle}</h1>
                <h1>{stories[3].author}</h1>
            </span>
        </div>

        <div className='right-top'>
            <h1>{stories[4].title}</h1>
            <h1>{stories[4].subtitle}</h1>
            <h1>{stories[4].author}</h1>
        </div>
    </div>
);

export default StoryIndexTop;