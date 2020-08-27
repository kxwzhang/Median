import React from 'react';

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.state['story_id'] = this.props.storyId;
        this.state['parent_comment_id'] = this.props.parentCommentId;
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.handleClick) {
            this.props.processForm(this.state)
                .then(() => this.props.handleClick(e))
                .then(() => this.props.fetchStory(this.props.storyId));
        } else {
            this.props.processForm(this.state)
                .then(() => this.props.fetchStory(this.props.storyId))
                .then(() => this.setState({ body: ''}));
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <form className='comment-form' onSubmit={this.handleSubmit}>
                <div className='current-comment'>
                    <i className="fas fa-user-circle"></i>
                    <div className='current-comment-text'>
                        {this.props.currentUser.username}
                    </div>
                </div>
                <label className='comment-form-body'>
                    <textarea
                        className='comment-form-textarea'
                        placeholder='What are your thoughts?'
                        value={this.state.body}
                        onChange={this.update('body')} />
                        <button className='comment-form-btn'>Respond</button>
                </label>
            </form>
        );
    }
}

export default CreateCommentForm;