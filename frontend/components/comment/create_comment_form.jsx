import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        e.preventDefault();
        this.props.processForm(this.state);
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

export default withRouter(CreateCommentForm);