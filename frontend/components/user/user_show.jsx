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
    if (prevProps.user !== this.props.user) {
      this.props.fetchUser(this.props.match.params.userId)
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
    console.log(userStories);
    if (userStories.length > 0 && userStories.every(story => story)) {
      console.log("hitting userStories.length > 0");
      return (
        <div className='user-show-content'>
          <h1 className='user-show-content-featured'>Featured</h1>
          {userStories}
        </div>
      );
    } else {
      console.log("hitting story === undefined");
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
            <header className='user-show-header'>
              <div className='user-show-header-left'>
                <div className='user-show-header-left-content'>
                  <h1 className='user-show-author'>{user.username}</h1>
                  {followButton}
                </div>
                <div className='user-show-header-container'>
                  <small className='user-show-followers'>
                    {user.subscriptionCount || '0'} 
                    Following&nbsp;&nbsp;&#183;&nbsp;&nbsp;{user.subscriberCount || '0'} 
                    Followers&nbsp;&nbsp;&nbsp;
                  </small>
                </div>
              </div>
  
              <div className='user-show-header-right'>
                img goes here
              </div>
            </header>
  
            <h4 className='user-show-divider'>Profile</h4>
            {this.details()}
          </div>
        </div>
      );
    }

  }
}

export default UserShow;