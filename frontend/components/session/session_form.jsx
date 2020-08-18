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
            <ul>
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
            <div 
                className='signup-option-link'>No account? {otherForm}
            </div>
        );
        const loginOption = (
            <div 
                className='login-option-link'>Already have an account? {otherForm}
            </div>
        );
        return (
            <div className='session-form-container'>
                <span className='session-form-type'>{formType} Form</span>
                <form className='session-form' onSubmit={this.handleSubmit}>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <label className='username-form'>Username:
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}/>
                    </label>
                    <label className='email-form'>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}/>
                    </label>
                    <label className='password-form'>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}/>
                    </label>
                    <button className='session-form-btn'>{formType}</button>
                    {formType === 'Login' ? demoLoginButton : ''}
                    {formType === 'Login' ? signupOption : loginOption }
                </form>
            </div>
        );
    }
}

export default SessionForm;