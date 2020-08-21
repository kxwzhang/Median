import React from 'react';

class StoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.story;
        
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='story-form-container'>
                <form>

                </form>
            </div>
        );
    }
}

export default StoryForm;g