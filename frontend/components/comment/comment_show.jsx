import React from 'react';
import CommentShowContainer from './comment_show_container';
import CreateCommentFormContainer from './create_comment_form_container';

class CommentShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const {story, fetchComment, fetchStory } = this.props;
        Object.values(story.commentsByParent).forEach(array => {
            array.forEach(comment => {
                fetchComment(comment.id);
            })
        });
        fetchStory(story.id);
    }
    
    handleClick(e) {
        e.preventDefault();
        this.setState({ toggled: !this.state.toggled });
    }

    displayCommentBox() {
        const { story, comment } = this.props;
        if (this.state.toggled) {
            return (
                <CreateCommentFormContainer story={story} comment={comment} />
            );
        } else {
            return null;
        }
    }

    render() {
        const { story, comment, commentsByParent, commenters } = this.props;

        if (!comment) {
            return null;
        } else {
            const nestedComments = (commentsByParent[comment.id] || []).map(comment => {
                return (
                    <CommentShowContainer
                        key={comment.id}
                        story={story}
                        comment={comment}
                        commenters={commenters}
                        commentsByParent={commentsByParent} />
                );
            });
            return (
                <div className='comment-container'>
                    <div>
                        <div className='comment-head'>
                            <div className='commenter-name'>{commenters[comment.commenter_id]}</div>
                        </div>
                        <div className='comment-text'>
                            <div className='commenter-body'>{comment.body}</div>
                        </div>
                        <div>
                            <i onClick={this.handleClick} className="far fa-comment"></i>
                        </div>
                        {this.displayCommentBox()}
                        <div className='nested-comments'>
                            {nestedComments}
                        </div>
                    </div>
               </div>
            );
        }
    }
}

export default CommentShow;