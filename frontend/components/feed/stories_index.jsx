import React from 'react';
import { Link } from 'react-router-dom';
import StoryIndexItem from './story_index_item';
import StoryIndexTop from './story_index_top';
import StoryIndexPopular from './stories_index_popular';

class StoriesIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storyIndexTop: null,
            storyIndexPopular: null,
            storyIndexItem: null
        }
    }

    componentDidMount() {
        this.props.fetchAllStories();
        window.scrollTo(0, 0);
    }

    render() {
        const { stories, shuffleStories, likeStory, unlikeStory } = this.props;

        if (!stories.length) {
            return null;
        } else {
            const shuffledStories = shuffleStories(stories);
            let storyIndexTop = <StoryIndexTop 
                stories={shuffledStories.slice(0, 5)}
                likeStory={likeStory}
                unlikeStory={unlikeStory} />
            let storyIndexPopular = <StoryIndexPopular 
                stories={shuffledStories.slice(5,9)}
                likeStory={likeStory}
                unlikeStory={unlikeStory} /> 
            let storyIndexItem = shuffledStories.slice(9).map(story => <StoryIndexItem 
                key={story.id} 
                story={story}
                likeStory={likeStory}
                unlikeStory={unlikeStory} />)
            return (
                <div className='feed-container'>
                   {storyIndexTop}
                    <Link to={`/stories/${shuffledStories[shuffledStories.length-1].id}`}>
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