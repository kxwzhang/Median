import React from "react";
import { Link } from "react-router-dom";

const StoryIndexPopular = ({ stories }) => {
  if (!stories.length) {
    return null;
  } else {
    return (
      <div className="story-index-popular">
        <h1 className="popular-title">Popular on Median</h1>
        <div className="popular-divider"></div>
        <ul>
          <li className="popular-story">
            <div className="popular-num">01</div>
            <span>
              <Link to={`/stories/${stories[0].id}`}>
                <h2 className="popular-story-title">{stories[0].title}</h2>
              </Link>
              <div>
                <Link to={`/users/${stories[0].author_id}/profile`}>
                  <h3 className="popular-story-author">{stories[0].author}</h3>
                </Link>
                <Link to={`/stories/${stories[0].id}`}>
                  <h4 className="index-min-read">
                    {(stories[0].id % 7) + 4} min read
                  </h4>
                </Link>
              </div>
            </span>
          </li>
          <li className="popular-story">
            <div className="popular-num">02</div>
            <span>
              <Link to={`/stories/${stories[1].id}`}>
                <h2 className="popular-story-title">{stories[1].title}</h2>
              </Link>
              <div>
                <Link to={`/users/${stories[1].author_id}/profile`}>
                  <h3 className="popular-story-author">{stories[1].author}</h3>
                </Link>
                <Link to={`/stories/${stories[1].id}`}>
                  <h4 className="index-min-read">
                    {(stories[1].id % 7) + 4} min read
                  </h4>
                </Link>
              </div>
            </span>
          </li>
          <li className="popular-story">
            <div className="popular-num">03</div>
            <span>
              <Link to={`/stories/${stories[2].id}`}>
                <h2 className="popular-story-title">{stories[2].title}</h2>
              </Link>
              <div>
                <Link to={`/users/${stories[2].author_id}/profile`}>
                  <h3 className="popular-story-author">{stories[2].author}</h3>
                </Link>
                <Link to={`/stories/${stories[2].id}`}>
                  <h4 className="index-min-read">
                    {(stories[2].id % 7) + 4} min read
                  </h4>
                </Link>
              </div>
            </span>
          </li>
          <li className="popular-story">
            <div className="popular-num">04</div>
            <span>
              <Link to={`/stories/${stories[3].id}`}>
                <h2 className="popular-story-title">{stories[3].title}</h2>
              </Link>
              <div>
                <Link to={`/users/${stories[3].author_id}/profile`}>
                  <h3 className="popular-story-author">{stories[3].author}</h3>
                </Link>
                <Link to={`/stories/${stories[3].id}`}>
                  <h4 className="index-min-read">
                    {(stories[3].id % 7) + 4} min read
                  </h4>
                </Link>
              </div>
            </span>
          </li>
        </ul>
        <div className="footer">
          <div className="footer-divider"></div>
          <a href="https://github.com/kxwzhang/Median" target="_blank">
            <i className="fab fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/kevinxzhang/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://angel.co/u/kevinxzhang" target="_blank">
            <i className="fab fa-angellist"></i>
          </a>
        </div>
      </div>
    );
  }
};

export default StoryIndexPopular;