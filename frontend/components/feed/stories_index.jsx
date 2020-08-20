import React from 'react';
import { Link } from 'react-router-dom';
import StoryIndexItem from './story_index_item';

class StoriesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllStories();
    }

    render() {
        // Use getRandomInt to generate random stories
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * Math.floor(max));
        };
        const { stories } = this.props;
        let storyIndexItem = stories.map(story => <StoryIndexItem key={story.id} story={story} />)





        return (
            <div className='feed-container'>
                <div className='feed-divider'></div>
                <div className='feed-main'>
                    <div className='stories-index-items'>
                        {storyIndexItem}
                    </div>
                </div>
            </div>
        );
    }
}

export default StoriesIndex;