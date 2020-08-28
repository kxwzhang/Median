# README

# Median

A Medium clone that allows users to publicly publish articles and/or blogs that can be viewed and commented on by others.

[Median Live Demo](https://a-median.herokuapp.com/ "Median Live Demo")

## Main Features

### User Authentication
User auth is an important feature that I want to highlight here because requiring a user to be logged in before having access to any of the other functionality on the site is crucial for creating a true user experience. The login and signup portion of the site uses a modal and also allows for quick access between login and signup. There is also a easy access button for individuals who wish to demo the website before committing to their own account.

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
