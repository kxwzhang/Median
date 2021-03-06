import React from 'react';
import Follows from '../follow/follows';
import { Link } from 'react-router-dom';
import UserShowItem from './user_show_item';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
      .then(() => this.props.fetchStories());
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.user && prevProps.user) {
      if (prevProps.user.following !== this.props.user.following) {
        this.props.fetchUser(this.props.match.params.userId);
      }
    }
  }

  details() {
    const { user, stories } = this.props;
    const userStories = [];
    stories.reverse().forEach(story => {
      if (!user.id) {
        return null;
      }
      if (user.id === story.author_id) {
        userStories.push(<UserShowItem key={story.id} story={story} />)
      }
    })
    if (userStories.length > 0 && userStories.every(story => story)) {
      return (
        <div className='user-show-content'>
          <h1 className='user-show-content-featured'>Featured</h1>
          {userStories}
        </div>
      );
    } else {
      return (
        <div className='user-show-content'>
          <h1 className='user-show-content-featured'>There is nothing to show at the moment.</h1>
        </div>
      );
    }
  }

  render() {
    const { user, currentUser, fetchUser } = this.props;
    if (!user) {
      return null;
    } else {
      const publishButton = currentUser && currentUser.id === user.id ?
        <div className='user-show-publish-container'>
          <Link to='/stories/new'><button className='user-show-publish-btn'>Publish</button></Link>
        </div> : null;

      const followButton = currentUser && currentUser.id !== user.id ?
        <div>
          <Follows user={user} fetchUser={fetchUser} />
        </div> : null;
      return (
        <div>
          {publishButton}
          <div className='user-show-container'>
            <span className='user-show-span'>
              <div className='user-show-span-left'>
                <div className='user-show-span-left-content'>
                  <h1 className='user-show-author'>{user.username}</h1>
                  {followButton}
                </div>
                <div className='user-show-span-container'>
                  <div className='user-show-followers'>
                    <div className='user-show-counts'>{(user.subscriptionCount) || '0'}</div> 
                    <div className='user-show-text'>Following</div>
                    <div className='user-show-counts'>{(user.subscriberCount) || '0'}</div> 
                    <div className='user-show-text'>Followers</div>
                  </div>
                </div>
              </div>
  
              <div className='user-show-span-right'>
                <i className="fas fa-user-circle user-show-circle-top"></i>
              </div>
            </span>
            <h4 className='user-show-divider'></h4>
            {this.details()}
          </div>
        </div>
      );
    }

  }
}

export default UserShow;