import React from 'react';
import { Link } from 'react-router-dom';

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
            email: 'winnersonly@aa.io', 
            password: '123456'
        };
        this.props.processForm(demoUser).then(this.props.closeModal);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {...this.state};
        this.props.processForm(user).then(this.props.closeModal);
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
        if (errors) this.props.removeSessionErrors();
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
                    <label className='username-form'>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}/>
                    </label>
                    <br/>
                    <label className='email-form'>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}/>
                    </label>
                    <br/>
                    <label className='password-form'>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}/>
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

export default SessionForm;