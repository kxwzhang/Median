import React from 'react';
import { Link } from 'react-router-dom';
import StoryIndexItem from './story_index_item';

class StoriesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllStories();
    }

    render() {
        const { stories } = this.props;
        // Use shuffledStories to generate random stories
        const shuffleStories = stories => {
            let i = stories.length - 1;
            for (; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [stories[i], stories[j]] = [stories[j], stories[i]];
            }
            return stories;
        }
        const shuffledStories = shuffleStories(stories);
        let storyIndexItem = shuffledStories.map(story => <StoryIndexItem key={story.id} story={story} />)




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