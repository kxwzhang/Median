import React from 'react';

class StoryShow extends React.Component {
    render() {
        const { story } = this.props;
        return (
            <div className='story-show-container'>
                <div className='story-show-details'>
                    <h1 className='show-title'></h1>
                </div>
            </div>
        );
    }
}

export default StoryShow;