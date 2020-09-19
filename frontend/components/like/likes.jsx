import React from "react";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleLike = this.handleLike.bind(this);
    this.state = this.status.bind(this);
  }

  handleLike(e) {
    const { story, likeStory, unlikeStory } = this.props;
    e.preventDefault();
    if (story.likedByCurrentUser) {
      unlikeStory(story.id);
    } else {
      likeStory(story.id);
    }
  }

  status() {
    const { story } = this.props;
    return story.likedByCurrentUser ? "Unliked" : "Liked";
  }

  render() {
    return (
      <div>
        <button className={this.status()} onClick={this.handleLike}>
          {this.status()}
        </button>
      </div>
    );
  }
}

export default Likes;
