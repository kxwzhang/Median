import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownState: false
        };
    }

    greetingMessage() {
        const { currentUser, logout } = this.props;
        return (
            <div className='navbar-profile-container'>
                <div>
                    <h2 className='navbar-username'>
                        {currentUser.username}
                    </h2>
                </div>
                <div className='navbar-links'>
                    <Link to='/stories/new'>
                        <button className='greeting-new-story'>New story</button>
                    </Link>
                    <Link to='/'>
                        <button className='logout-btn' onClick={logout}>Log Out</button>
                    </Link>
                </div>
            </div>
        );
    }

    sessionLinks() {
        const { openModal } = this.props;
        return (
            <div className='session-links-container'>
                <button
                    className='login-btn'
                    onClick={() => openModal('login')}>Login
                </button>
                <button
                    className='signup-btn'
                    onClick={() => openModal('signup')}>Get Started
                </button>
            </div>
        );
    }

    render() {
        const { currentUser } = this.props;
        return currentUser ? this.greetingMessage() : this.sessionLinks();
    }
}

export default withRouter(Greeting);