import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const demoUser = { 
            username: 'kehwin', 
            email: 'kehwin@aa.io', 
            password: '123456'
        };
        this.props.processForm(demoUser)
            .then(this.props.closeModal)
            .then(() => this.props.history.push('/feed'));
    }

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
    
    componentWillUnmount() {
        const { errors } = this.props;
        if (errors) this.props.removeErrors();
    }

    render() {
        const { formType } = this.props;
        const demoLoginButton = (
            <button
                className='demo-login-btn'
                onClick={this.handleDemoLogin}>Demo Login
            </button>
        );

        const { otherForm } = this.props;
        const signupOption = (
            <span 
                className='signup-option-text'>No account?{otherForm}
            </span>
        );
        const loginOption = (
            <span 
                className='login-option-text'>Already have an account?{otherForm}
            </span>
        );


        let sessionFormType;
        let modalMessage;
        if (formType === 'Login') {
            sessionFormType = 'Welcome back.'
            modalMessage = (
                <span className='welcome-back-message'>
                    Login to view your personalized homepage,
                    and catch up on your stories from your favorite authors.
                </span>
            )
        } else {
            sessionFormType = 'Join Median.'
            modalMessage = (
                <span className='create-account-message'>
                    Create an account to view great stories,
                    personalize your homepage, follow authors,
                    and like stories that you love.
                </span>
            )
        }

        return (
            <div className='session-form-container'>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <span className='session-form-type'>{sessionFormType}</span>
                <br/>
                {modalMessage}
                <form className='session-form' onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <label className='username-form'>Your username
                        <br/>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className='username-form-input'/>
                    </label>
                    <br/>
                    <label className='email-form'>Email
                        <br/>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='email-form-input'/>
                    </label>
                    <br/>
                    <label className='password-form'>Password
                        <br/>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className='password-form-input'/>
                    </label>
                    <br/>
                    <button className='session-form-btn'>{formType}</button>
                    <br/>
                    {formType === 'Login' ? demoLoginButton : ''}
                    <br/>
                    {formType === 'Login' ? signupOption : loginOption }
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);