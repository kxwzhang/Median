import React from "react";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleLike = this.handleLike.bind(this);
    this.status = this.status.bind(this);
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
    return story.likedByCurrentUser ? "Unlike" : "Like";
  }

  render() {
    return (
      <div>
        <i id={this.status()} onClick={this.handleLike} className="fas fa-sign-language"></i>
        {/* <button className={this.status()} onClick={this.handleLike}>
          {this.status()}
        </button> */}
      </div>
    );
  }
}

export default Likes;
