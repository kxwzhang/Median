import React from 'react';

const StoryIndexTop = ({ story }) => {
    const centerTop = story.slice(1,4).map(story => (
        <li>
            <h1>{story.title}</h1>
            <h2>{story.subtitle}</h2>
            <h3>{story.author}</h3>
        </li>
    )); 

    return (
        <div className='story-index-top'>
            <div className='left-top'>
                <h1>{story[0].title}</h1>
                <h2>{story[0].subtitle}</h2>
                <h3>{story[0].author}</h3>
            </div>

            <div className='center-top'>
                <ul>
                    {centerTop}
                </ul>
            </div>

            <div className='right-top'>
                <h1>{story[4].title}</h1>
                <h2>{story[4].subtitle}</h2>
                <h3>{story[4].author}</h3>
            </div>
        </div>
    );
};

export default StoryIndexTop;