import React from 'react';
import StoryIndexTop from './story_index_top';

const StoryIndexPopular = ({ stories }) => (
    <div className='story-index-popular'>
        <h1 className='popular-title'>
            Popular on Median
        </h1>
        <div className='popular-divider'></div>

        <ul>
            <li className='popular-story'>
                <div className='popular-num'>01</div>
                <h2 className='popular-story-title'>{stories[0].title}</h2>
                <h3 className='popular-story-author'>{stories[0].author}</h3>
            </li>
            <li className='popular-story'>
                <div className='popular-num'>02</div>
                <h2 className='popular-story-title'>{stories[1].title}</h2>
                <h3 className='popular-story-author'>{stories[1].author}</h3>
            </li>
            <li className='popular-story'>
                <div className='popular-num'>03</div>
                <h2 className='popular-story-title'>{stories[2].title}</h2>
                <h3 className='popular-story-author'>{stories[2].author}</h3>
            </li>
            <li className='popular-story'>
                <div className='popular-num'>04</div>
                <h2 className='popular-story-title'>{stories[3].title}</h2>
                <h3 className='popular-story-author'>{stories[3].author}</h3>
            </li>
        </ul>
    </div>
);

export default StoryIndexPopular;