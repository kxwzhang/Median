import React from 'react';
import { Link } from 'react-router-dom';

const UserShowItem = ({ story }) => (
  <div className='user-show-item-container'>
    <section className='user-item-section'>
      <div className='user-item-profile-pic-container'>
        <Link to={`/users/${story.author_id}`}>
          <i className="fas fa-user-circle user-show-circle"></i>
        </Link>
        <div className='user-item-info'>
          <div className='user-item-author'>
            <Link to={`/users/${story.author_id}`}>
              {story.author}
            </Link>
          </div>
        </div>
        <div className='user-item-time'> 
          <h4 className='index-min-read'>{story.id % 7 + 4} min read</h4>
        </div>
      </div>

      <Link to={`/stories/${story.id}`}>
        <figure className='user-item-image-container'>
          <img src={`${story.photoUrl}`} className='user-item-image' />
        </figure>
        <h1 className='user-item-title'>{story.title}</h1>
        <h2 className='user-item-subtitle'>{story.subtitle}</h2>
      </Link>
    </section>
  </div>
);

export default UserShowItem;