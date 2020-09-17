import React from 'react';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/user_action';

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mDTP = dispatch => ({
  followUser: id => dispatch(followUser(id)),
  unfollowUser: id => dispatch(unfollowUser(id))
});

class Follows extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
    this.status = this.status.bind(this);
  }

  handleFollow(e) {
    console.log(this.props.user.following);
    e.stopPropagation();
    if (this.props.user.following) {
      this.props.unfollowUser(this.props.user.id);
    } else {
      this.props.followUser(this.props.user.id);
    }
  }

  status() {
    return this.props.user.following ? 'Unfollow' : 'Follow';
  }

  render() {
    const { currentUser, user } = this.props;
    if (!currentUser || user.id === currentUser.id) {
      return (
        <div></div>
      );
    } else {
      return (
        <button
          className={this.status()}
          onClick={this.handleFollow}>
          {this.status()}
        </button>
      );
    }
  }
}

export default connect(mSTP, mDTP)(Follows);