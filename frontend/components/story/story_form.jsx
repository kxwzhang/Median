import React from 'react';
import { withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.story;
        this.state['photoFile'] = null;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        const { match, history, formType, currentUserId } = this.props;
        const ajaxMethod = formType === 'Publish' ? 'POST' : 'PATCH'
        const ajaxUrl = formType === 'Publish' ? '/api/stories' : `/api/stories/${match.params.storyId}`
        e.preventDefault();
        const formData = new FormData();
        formData.append('story[title]', this.state.title);
        formData.append('story[subtitle]', this.state.subtitle);
        formData.append('story[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('story[photo]', this.state.photoFile);
        }
        $.ajax({
            url: ajaxUrl,
            method: ajaxMethod,
            data: formData,
            contentType: false,
            processData: false
        }).then(story => history.push(`/stories/${story.id}`));
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photoUrl: reader.result, photoFile: file });
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: '', photoFile: null });
        }
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
                    <label>Add Image
                        <input 
                            onChange={this.handleFile}
                            type="file"/>
                    </label>
                </form>
            </div>
        );
    }
}

export default withRouter(StoryForm);