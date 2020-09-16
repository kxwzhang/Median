import React from 'react';
import { Link } from 'react-router-dom';

const StoryIndexTop = ({ stories }) => {
    if (stories) {
        return (
            <div className='story-index-top'>
                <div className='left-top'>
                    <Link to={`/stories/${stories[0].id}`}>
                        <div>
                            <img src={stories[0].photoUrl} />
                        </div>

                        <h1 className='story-top-title'>{stories[0].title}</h1>
                        <h2 className='story-top-subtitle'>{stories[0].subtitle}</h2>
                    </Link>
                        <Link to={`/users/${stories[0].author_id}`}>
                            <h3 className='story-top-author'>By {stories[0].author}</h3>
                        </Link>
                    <Link to={`/stories/${stories[0].id}`}>
                        <h4 className='top-min-read'>{stories[0].id % 7 + 4} min read</h4>
                    </Link>
                </div>

                <div className='center-top'>
                    <span>
                        <div className="top-details">
                            <Link to={`/stories/${stories[1].id}`}>
                                <img className='center-top-image' src={stories[1].photoUrl} />
                            </Link>
                                <div className='top-details-section'>
                            <Link to={`/stories/${stories[1].id}`}>
                                    <h1 className='center-top-title'>{stories[1].title}</h1>
                                    <h2 className='story-top-subtitle'>{stories[1].subtitle}</h2>
                            </Link>
                                    <Link to={`/users/${stories[1].author_id}`}>
                                        <h3 className='story-top-author'>{stories[1].author}</h3>
                                    </Link>
                                    <Link to={`/stories/${stories[1].id}`}>
                                        <h4 className='top-min-read'>{stories[1].id % 7 + 4} min read</h4>
                                    </Link>
                                </div>
                        </div>
                    </span>
                    <span>
                        <div className='top-details'>
                            <Link to={`/stories/${stories[2].id}`}>
                                <img className='center-top-image' src={stories[2].photoUrl} />
                            </Link>
                                <div className='top-details-section'>
                            <Link to={`/stories/${stories[2].id}`}>
                                    <h1 className='center-top-title'>{stories[2].title}</h1>
                                    <h2 className='story-top-subtitle'>{stories[2].subtitle}</h2>
                            </Link>
                                    <Link to={`/users/${stories[2].author_id}`}>
                                        <h3 className='story-top-author'>{stories[2].author}</h3>
                                    </Link>
                                    <Link to={`/stories/${stories[2].id}`}>
                                        <h4 className='top-min-read'>{stories[2].id % 7 + 4} min read</h4>
                                    </Link>
                                </div>
                        </div>
                    </span>
                    <span>
                        <div className='top-details'>
                            <Link to={`/stories/${stories[3].id}`}>
                                <img className='center-top-image' src={stories[3].photoUrl} />
                            </Link>
                                <div className='top-details-section'>
                            <Link to={`/stories/${stories[3].id}`}>
                                    <h1 className='center-top-title'>{stories[3].title}</h1>
                                    <h2 className='story-top-subtitle'>{stories[3].subtitle}</h2>
                            </Link>
                                    <Link to={`/users/${stories[3].author_id}`}>
                                        <h3 className='story-top-author'>{stories[3].author}</h3>
                                    </Link>
                                    <Link to={`/stories/${stories[3].id}`}>
                                        <h4 className='top-min-read'>{stories[3].id % 7 + 4} min read</h4>
                                    </Link>
                                </div>
                        </div>
                    </span>
                </div>

                <div className='right-top'>
                    <Link to={`/stories/${stories[4].id}`}>
                        <div>
                            <img src={stories[4].photoUrl} />
                        </div>

                        <h1 className='story-top-title'>{stories[4].title}</h1>
                        <h2 className='story-top-subtitle'>{stories[4].subtitle}</h2>
                    </Link>
                        <Link to={`/users/${stories[4].author_id}`}>
                            <h3 className='story-top-author'>{stories[4].author}</h3>
                        </Link>
                        <Link to={`/stories/${stories[4].id}`}>
                            <h4 className='top-min-read'>{stories[4].id % 7 + 4} min read</h4>
                        </Link>
                </div>
            </div>
        );
    }
};

export default StoryIndexTop;