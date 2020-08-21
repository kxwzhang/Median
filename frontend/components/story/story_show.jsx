import React from 'react';

class StoryShow extends React.Component {
    render() {
        const { story } = this.props;
        return (
            <div className='story-show-container'>
                <div className='story-show-details'>
                <h1 className='show-title'>{story.title}</h1>
                <h2 className='show-subtitle'>{story.subtitle}</h2>
                <span className='show-author'>
                    <div className='show-author-name'>{story.author}</div>
                    <div className='show-read-time'>{story.id} min read</div>
                </span>
                <div className=''>{story.photoUrl}</div>
                <p className='show-body'>
                    {story.body}
                </p>

                </div>
            </div>
        );
    }
}

export default StoryShow;