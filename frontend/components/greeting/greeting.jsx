import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    greetingMessage() {
        const { currentUser, logout } = this.props;
        return (
            <div className='dropdown'>
                <button className='dropbtn'><i className="fas fa-user-circle"></i></button>
                <div className='dropdown-content'>
                    <div className='dd-list-item'>
                        <div className='dropdown-header'>
                            <i className="fas fa-user-circle"></i>
                            <h2 className='dropdown-name'>{currentUser.username}</h2>
                        </div>
                    </div>
                    <div className='dropdown-divider'></div>
                    <div className='dd-list-item'>
                        <Link to='/stories/new'>
                            <div className='greeting-new-story'>New story</div>
                        </Link>
                    </div>
                    <div className='dropdown-divider'></div>
                    <div className='dd-list-item'>
                        <Link to={`/users/${currentUser.id}`}>
                            <div className='greeting-stories'>Stories</div>
                        </Link>
                    </div>
                    <div className='dropdown-divider'></div>
                    <div className='dd-list-item'>
                        <Link to='/'>
                            <div className='logout-btn' onClick={logout}>Log Out</div>
                        </Link>
                    </div>
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