import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.story;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const { history, currentUserId } = this.props;
        e.preventDefault();
        this.props.processForm(this.state)
            .then(history.push(`/stories/${currentUserId}`));
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        const { formType } = this.props;
        return (
            <div className='story-form-container'>
                <form onSubmit={this.handleSubmit}>
                    <button>{formType}</button>
                    <label>Title
                        <input 
                            onChange={this.update('title')} 
                            type="text"
                            value={this.state.title}
                            placeholder='Title'/>
                    </label>
                    <label>Subtitle
                        <input 
                            onChange={this.update('subtitle')} 
                            type="text"
                            value={this.state.subtitle}
                            placeholder='Subtitle'/>
                    </label>
                    <label>Body
                        <textarea 
                            onChange={this.update('body')} 
                            value={this.state.body}
                            placeholder='Tell your story...'/>
                    </label>
                </form>
            </div>
        );
    }
}

export default withRouter(StoryForm);