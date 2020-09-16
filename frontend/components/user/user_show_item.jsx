import React from 'react';
import { Link } from 'react-router-dom';

const UserShowItem = ({ story }) => (
  <div className='user-show-item-container'>
    <header className='user-item-header'>
      <div className='user-item-profile-pic-container'>
        <Link to={`/users/${story.author_id}`}>
          img goes here
        </Link>

        <div className='user-item-info'>
          <small className='user-item-author'>
            <Link to={`/users/${story.author_id}`}>
              {story.author}
            </Link>
          </small>
        </div>
      </div>

      <Link to={`/stories/${story.id}`}>
        <figure className='user-item-image-container'>
          <img src={`${story.photoUrl}`} className='user-item-image' />
        </figure>
        <h1 className='user-item-title'>{story.title}</h1>
        <h2 className='user-item-title'>{story.subtitle}</h2>
        <h3 className='user-item-body'>{story.body}</h3>
      </Link>

      <footer className='user-item-footer'>
        <Link to={`/stories/${story.id}`}>
          <label className='user-item-responses'>Comments</label>
        </Link>
      </footer>
    </header>
  </div>
);

export default UserShowItem;