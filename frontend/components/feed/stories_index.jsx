import React from 'react';
import { Link } from 'react-router-dom';

class StoriesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllStories();
    }

    render() {
        const { stories } = this.props;
        return (
            <div>

            </div>
        );
    }
}

export default StoriesIndex;