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
        const { stories, shuffleStories } = this.props;

        if (!stories.length) {
            return null;
        } else {
            const shuffledStories = shuffleStories(stories);
            let storyIndexTop = <StoryIndexTop stories={shuffledStories.slice(0, 5)} />
            let storyIndexPopular = <StoryIndexPopular stories={shuffledStories.slice(5,9)} /> 
            let storyIndexItem = shuffledStories.slice(9).map(story => <StoryIndexItem key={story.id} story={story} />)
            return (
                <div className='feed-container'>
                   {storyIndexTop}
                    <Link to={`/stories/${shuffledStories[15].id}`}>
                        <div className='editors-picks'>
                            SEE EDITOR'S PICK
                        </div>
                    </Link>
                    <div className='feed-divider'></div>
                    <div className='feed-main'>
                        <div className='feed-main-items'>
                            {storyIndexItem}
                        </div>
                        <div className='popular-aside'>
                            {storyIndexPopular}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default StoriesIndex;