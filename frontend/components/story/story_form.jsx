import React from 'react';

class StoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.story;

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
            // .then(() => this.props.history.push(`/stories/${}`));
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
                            value={this.state.title}/>
                    </label>
                    <label>Subtitle
                        <input 
                            onChange={this.update('subtitle')} 
                            type="text"
                            value={this.state.subtitle}/>
                    </label>
                    <label>Body
                        <textarea 
                            onChange={this.update('body')} 
                            value={this.state.body}/>
                    </label>
                </form>
            </div>
        );
    }
}

export default StoryForm;