# README

# Median

A Medium clone that allows users to publicly publish articles and/or blogs that can be viewed and commented on by others.

[Median Live Demo](https://a-median.herokuapp.com/ "Median Live Demo")

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
![Feed](https://github.com/kxwzhang/Median/blob/master/app/assets/images/feed.png)
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
Clicking on a story, either on the text or image, will take the user to that stories page, where the full story is displayed. Other notable features of the feed include: a "**Editor's Picks**" which is akin to sending the user to a story that is featured, a sticky aside that moves with the user as they scroll up and down the page, deleting stories, and a drop down menu for links to publishing new stories as well as viewing stories published by the current user.
![Your Stories](https://github.com/kxwzhang/Median/blob/master/app/assets/images/your_stories.png)
![Aide](https://github.com/kxwzhang/Median/blob/master/app/assets/images/aside.png)

### Leaving Comments
Logged in users can also leave comments on stories. Each user can respond to other users and a user can delete their own comments.
{IMAGES GO HERE}
Comments can be nested, which was done by recursive rendering of the comments component
```javascript
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

## Technical Challenges
This project had its ups and downs, and some of the downs were bigg than others. One notable challenge that I came across was figuring out how to load the feed page more efficiently because it had to fetch a lot of information on each load of the page. To fix that issue, I had to resolve some N+1 queries in my controllers as well as resizing the images that were being sent to the frontend so that the frontend did not have to render big images before resizing it at the same time. 
Below is a code snippet of how I accomplished that using `.includes()` as well as using the Active Storage `mini_magiick` gem.
```javascript
def index
        @stories = Story.includes(:author, "photo_attachment": :blob).all
        render :index
    end
```  