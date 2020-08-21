import React from 'react';
import { connect } from 'react-redux';

class EditStoryForm extends React.Component {
    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId);
    }

    render() {
        const { processForm, formType, story } = this.props;
        
        if (!story) {
            return null;
        } else {
            return (
                <StoryForm 
                    processForm={processForm}
                    formType={formType}
                    story={story}/>
            );
        }
    }
}

const mSTP = (state, ownProps) => ({
    story: state.stories[ownProps.match.params.storyId],
    formType: 'Edit story'
});

const mDTP = dispatch => ({
    fetchStory: storyId => dispatch(fetchStory(storyId)),
    processForm: story => dispatch(updateStory(story))
});

export default connect(mSTP, mDTP)(EditStoryFormContainer)