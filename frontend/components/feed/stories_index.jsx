import React from 'react';
import { Link } from 'react-router-dom';
import StoryIndexItem from './story_index_item';
import StoryIndexTop from './story_index_top';
import StoryIndexPopular from './stories_index_popular';

class StoriesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllStories();
    }

    render() {
        const { stories } = this.props;

        if (!stories.length) {
            return null;
        } else {
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
            let storyIndexTop = <StoryIndexTop stories={shuffledStories.slice(0, 5)} />
            let storyIndexPopular = <StoryIndexPopular stories={shuffleStories.slice(5,9)} /> 
            let storyIndexItem = shuffledStories.slice(9).map(story => <StoryIndexItem key={story.id} story={story} />)

            return (
                <div className='feed-container'>
                   {storyIndexTop}
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
}

export default StoriesIndex;