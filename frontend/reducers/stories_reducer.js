import { 
    RECEIVE_ALL_STORIES, 
    RECEIVE_STORY, 
    REMOVE_STORY 
} from '../actions/story_action';

const storiesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {...oldState};
    switch (action.type) {
        case RECEIVE_ALL_STORIES:
            return {...action.stories};
        case RECEIVE_STORY:
            newState[action.story.id] = action.story;
            return newState;
        case REMOVE_STORY:
            delete newState[action.storyId];
            return newState;
        default:
            return oldState;
    }
};

export default storiesReducer;