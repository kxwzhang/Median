import React from 'react';
import { Link } from 'react-router-dom';
import CommentShowContainer from '../comment/comment_show_container';
import CreateCommentFormContainer from '../comment/create_comment_form_container';

class StoryShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggled: false };

        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId);
        window.scrollTo(0, 0);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ toggled: !this.state.toggled });
    }

    displayCommentBox() {
        const { story } = this.props;
        if (this.state.toggled) {
            return (
                <div className='comment-filler'>
                    <CreateCommentFormContainer story={story} />
                </div>
            );
        } else {
            return null;
        }
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
                                <div className='leave-comment-btn-container'>
                                    <button 
                                        className='leave-comment-btn' 
                                        onClick={this.handleClick}>Leave a comment!
                                    </button>
                                </div>
                                {this.displayCommentBox()}
                                {commentList}
                            </span>
                            <div className='splash-footer-container'>
                                <div className='splash-footer'>
                                    <a href='https://github.com/kxwzhang/Median'><i className="fab fa-github-square splash-github"></i></a>
                                    <a href='https://www.linkedin.com/in/kevin-zhang-104623191/'><i className="fab fa-linkedin splash-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            );
        }
    }
}

export default StoryShow;