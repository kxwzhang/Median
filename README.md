# ![Favicon](https://github.com/kxwzhang/Median/blob/master/app/assets/images/favicon.ico) Median

A Medium clone that allows users to publicly publish articles and/or blogs that can be viewed and commented on by others.

[Median Live Demo](https://a-median.herokuapp.com/ "Median Live Demo")

![Median Gif](https://github.com/kxwzhang/Median/blob/master/app/assets/images/median_demo.gif)

## Technologies Used
* Heroku
* Ruby on Rails
* PostgreSQL
* ActiveRecord
* Webpack
* AWS S3
* React
* Redux
* SCSS

## Main Features

### User Authentication
User auth is an important feature that I want to highlight here because requiring a user to be logged in before having access to any of the other functionality on the site is crucial for creating a true user experience. The login and signup portion of the site uses a modal and also allows for quick access between login and signup. There is also a easy access button for individuals who wish to demo the website before committing to their own account.
![Session Form](https://github.com/kxwzhang/Median/blob/master/app/assets/images/user_auth.png)
The following code snippet comes from my `session_form` where I implemented the functionality of closing the modal upon processing a user's session form and then pushing that user to their feed page. Also shown below is how I was able to capture the values using event handling like `e.currentTarget.value` as well as how errors were being rendered by the front end.
```javascript
handleSubmit(e) {
    e.preventDefault();
    const user = {...this.state};
    this.props.processForm(user)
        .then(this.props.closeModal)
        .then(() => this.props.history.push('/feed'));
}

update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
}

renderErrors() {
    const { errors } = this.props;
    return (
        <ul className='session-form-errors'>
            {errors.map((error, idx) => (
                <li key={`error-${idx}`}>{error}</li>
            ))}
        </ul>
    );
}
```

### Publishing Stories
Stories are the bread and butter of this project. Any logged in user can publish, view, and delete stories. In particular, stories can be published with images. 
![Publishing](https://github.com/kxwzhang/Median/blob/master/app/assets/images/story_form.png)
Also each user is greeted by a feed upon log in, which are stories that are randomly generated upon each refresh. 
```javascript
const mDTP = dispatch => ({
    fetchAllStories: () => dispatch(fetchAllStories()),
    shuffleStories: stories => {
        let i = stories.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [stories[i], stories[j]] = [stories[j], stories[i]];
        }
        return stories;
    }
});

const shuffledStories = shuffleStories(stories);
let storyIndexTop = <StoryIndexTop stories={shuffledStories.slice(0, 5)} />
let storyIndexPopular = <StoryIndexPopular stories={shuffledStories.slice(5,9)} /> 
```
Clicking on a story, either on the text or image, will take the user to that stories page, where the full story is displayed. Other notable features of the feed include: 
A "**Editor's Picks**" which is akin to sending the user to a story that is featured. 
![Feed](https://github.com/kxwzhang/Median/blob/master/app/assets/images/feed.png)
A sticky aside that moves with the user as they scroll up and down the page, deleting stories.
![Aide](https://github.com/kxwzhang/Median/blob/master/app/assets/images/aside.png)
A drop down menu for links to publishing new stories as well as viewing stories published by the current user.
![Your Stories](https://github.com/kxwzhang/Median/blob/master/app/assets/images/your_stories.png)

### Leaving Comments
Logged in users can also leave comments on stories. Each user can respond to other users and a user can delete their own comments.
![Comments](https://github.com/kxwzhang/Median/blob/master/app/assets/images/comment.png)
Comments can be nested, which was done by recursive rendering of the comments container component.
```javascript
// comment_show.jsx
if (!comment) {
    return null;
} else {
    const nestedComments = (commentsByParent[comment.id] || []).map(comment => {
        return (
            <CommentShowContainer
                key={comment.id}
                story={story}
                comment={comment}
                commenters={commenters}
                commentsByParent={commentsByParent} />
        );
    });
```

### Following Users
Logged in users can follow and unfollow other users. The users profile page will also display all the 
stories written by that user and clicking on any of the stories will take the user
directly to the story show page.
![User Show](https://github.com/kxwzhang/Median/blob/master/app/assets/images/user_profile.png)

### Liking Stories
Logged in users can like and unlike stories. A story displays the number of likes it has.
![Story Likes](https://github.com/kxwzhang/Median/blob/master/app/assets/images/story_likes.png)
Liking a story will change how the button looks depending on the story's liked status.
The following code snippet demonstrates how I was able to achieve that: 
```javascript
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
```

## Technical Challenges
This project had its ups and downs, and some of the downs were greater than others. One notable challenge that I came across was figuring out how to load the feed page more efficiently because it had to fetch a lot of information on each load of the page. To fix that issue, I had to resolve some N+1 queries in my controllers as well as resizing the images that were being sent to the frontend so that the frontend did not have to render big images before resizing it at the same time. 
Below is a code snippet of how I accomplished that using `.includes()` as well as using the Active Storage `mini_magiick` gem.
```javascript
def index
    @stories = Story.includes(:author, "photo_attachment": :blob).all
    render :index
end
```  
Another notable challenge I encountered was figuring out how to properly render the comments React component. At first I ran into the issue of the comments not being rendered at all. But I quickly realized that I needed to use my Comments container component instead of the presentational component to get the props. In addition, I needed to figure out how to clear the comment form and how to automatically close the comments form when the user submits a comment. I was able to accomplish both of these by setting local state: 
```javascript
// Clearing comments form in create_comment_form.jsx
handleSubmit(e) {
    e.preventDefault();
    if (this.props.handleClick) {
        this.props.processForm(this.state)
            .then(() => this.props.handleClick(e))
            .then(() => this.props.fetchStory(this.props.storyId));
    } else {
        this.props.processForm(this.state)
            .then(() => this.props.fetchStory(this.props.storyId))
            .then(() => this.setState({ body: ''}));
    }
}
// Conditional rendering of comments form in comment_show.jsx
displayCommentBox() {
    const { story, comment } = this.props;
    if (this.state.toggled) {
        return (
            <CreateCommentFormContainer story={story} comment={comment} handleClick={this.handleClick} />
        );
    } else {
        return null;
    }
}
```

## Future Functionalities
Some features to add to the project in the future:
heroku run rails db:migrate 
* Sort by categories
* Editing user profile