import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        const { formType } = this.props;
        return (
            <div className='user-session-form-container'>
                <span className='user-session-form-type'>{formType}</span>
                <form className='user-session-form'>
                    <label className='username-form'>Username:
                        <input type="text"/>
                    </label>
                    <label className='email-form'>Email:
                        <input type="text"/>
                    </label>
                    <label className='password-form'>Password:
                        <input type="password"/>
                    </label>
                </form>
            </div>
        );
    }
}

export default SessionForm;