# README

# Median

A Medium clone that allows users to publicly publish articles and/or blogs that can be viewed and commented on by others.

[Median Live Demo](https://a-median.herokuapp.com/ "Median Live Demo")

## Main Features

### User Authentication
User auth is an important feature that I want to highlight here because requiring a user to be logged in before having access to any of the other functionality on the site is crucial for creating a true user experience. The login and signup portion of the site uses a modal and also allows for quick access between login and signup. There is also a easy access button for individuals who wish to demo the website before committing to their own account.
{IMAGE GOES HERE}
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
Stories are the bread and butter of this project. Any logged in user can publish, view, and delete stories. In particular, stories can be published with images. Also each user is greeted by a feed upon log in, which are stories that are randomly generated upon each refresh. 
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
Clicking on a story, either on the text or image, will take the user to that stories page, where the full story is displayed. Other notable features of the feed include: a "**Editor's Picks**" which is akin to sending the user to a story that is featured, a sticky aside that moves with the user as they scroll up and down the page, and a drop down menu for links to publishing new stories as well as viewing stories published by the current user.
{IMAGES GO HERE}

