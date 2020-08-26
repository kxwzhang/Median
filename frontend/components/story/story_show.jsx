import React from 'react';
import { Link } from 'react-router-dom';
import CommentShowContainer from '../comment/comment_show_container';
import CreateCommentFormContainer from '../comment/create_comment_form_container';

class StoryShow extends React.Component {
    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId);
        window.scrollTo(0, 0);
    }

    render() {
        const { story } = this.props;
        if (!story) {
            return null;
        } else {
            let commentList = null;
            if (story.commentsByParent) {
                if (Object.values(story.commentsByParent).length > 0) {
                    commentList = story.commentsByParent[''].map(comment => {
                        return (
                            <CommentShowContainer
                                key={comment.id}
                                story={story}
                                comment={comment}
                                commenters={story.commenters} 
                                commentsByParent={story.commentsByParent} />
                        );
                    })
                }
            }
            
            return (
                <div className='story-show-page'>
                    <span className='story-show-container'>
                        <div className='story-show-details'>
                            <h1 className='show-title'>{story.title}</h1>
                            <h2 className='show-subtitle'>{story.subtitle}</h2>
                            <span className='show-author'>
                                <div className='show-author-name'>By {story.author}</div>
                                <div className='show-read-time'>{story.id % 7 + 4} min read</div>
                            </span>
                            <img className='show-image' src={story.photoUrl} />
                            <p className='show-body'>
                                {story.body}
                            </p>

                            <span className='story-show-comment-container'>
                                <div className='comments-head'>Comments</div>
                                    <div className='comment-filler'>
                                        <CreateCommentFormContainer story={story} />
                                    </div>
                                {commentList}
                            </span>
                        </div>
                    </span>
                </div>
            );
        }
    }
}

export default StoryShow;