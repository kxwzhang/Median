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
        this.props.processForm(this.state)
            .then(() => this.props.fetchStory(this.props.storyId));
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className='comment-form-body'>
                    <input
                        type="text"
                        placeholder='What is on your mind?'
                        value={this.state.body}
                        onChange={this.update('body')} />
                        <button className='comment-form-btn'>Respond</button>
                </label>
            </form>
        );
    }
}

export default CreateCommentForm;