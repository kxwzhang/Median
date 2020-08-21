import React from 'react';
import { connect } from 'react-redux';
import { fetchStory } from '../../actions/story_action';
import StoryForm from './story_form';

class EditStoryForm extends React.Component {
    componentDidMount() {
        this.props.fetchStory(this.props.match.params.storyId);
    }

    render() {
        const { processForm, formType, story, currentUserId } = this.props;
        
        if (!story) {
            return null;
        } else {
            return (
                <StoryForm 
                    processForm={processForm}
                    formType={formType}
                    story={story}
                    currentUserId={currentUserId}/>
            );
        }
    }
}

const mSTP = (state, ownProps) => ({
    story: state.entities.stories[ownProps.match.params.storyId],
    formType: 'Edit story',
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    fetchStory: storyId => dispatch(fetchStory(storyId)),
    processForm: story => dispatch(updateStory(story))
});

export default connect(mSTP, mDTP)(EditStoryForm);