import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexPopular = ({ stories }) => {
    if (stories) {
        return (
            <div className='story-index-popular'>
                <h1 className='popular-title'>
                    Popular on Median
        </h1>
                <div className='popular-divider'></div>
                <ul>
                    <li className='popular-story'>
                        <div className='popular-num'>01</div>
                        <Link to={`/stories/${stories[0].id}`}>
                            <span>
                                <h2 className='popular-story-title'>{stories[0].title}</h2>
                                <div>
                                    <h3 className='popular-story-author'>{stories[0].author}</h3>
                                    <h4 className='index-min-read'>{stories[0].id % 7 + 4} min read</h4>
                                </div>
                            </span>
                        </Link>
                    </li>
                    <li className='popular-story'>
                        <div className='popular-num'>02</div>
                        <Link to={`/stories/${stories[1].id}`}>
                            <span>
                                <h2 className='popular-story-title'>{stories[1].title}</h2>
                                <div>
                                    <h3 className='popular-story-author'>{stories[1].author}</h3>
                                    <h4 className='index-min-read'>{stories[1].id % 7 + 4} min read</h4>
                                </div>
                            </span>
                        </Link>
                    </li>
                    <li className='popular-story'>
                        <div className='popular-num'>03</div>
                        <Link to={`/stories/${stories[2].id}`}>
                            <span>
                                <h2 className='popular-story-title'>{stories[2].title}</h2>
                                <div>
                                    <h3 className='popular-story-author'>{stories[2].author}</h3>
                                    <h4 className='index-min-read'>{stories[2].id % 7 + 4} min read</h4>
                                </div>
                            </span>
                        </Link>
                    </li>
                    <li className='popular-story'>
                        <div className='popular-num'>04</div>
                        <Link to={`/stories/${stories[3].id}`}>
                            <span>
                                <h2 className='popular-story-title'>{stories[3].title}</h2>
                                <div>
                                    <h3 className='popular-story-author'>{stories[3].author}</h3>
                                    <h4 className='index-min-read'>{stories[3].id % 7 + 4} min read</h4>
                                </div>
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className='footer'>
                    <div className='footer-divider'></div>
                    <a href='https://github.com/kxwzhang/Median'>About this site</a>
                </div>
            </div>
        );
    }
};

export default StoryIndexPopular;