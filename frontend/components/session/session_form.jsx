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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const demoUser = { 
            username: 'kehwin', 
            email: 'winnersonly@aa.io', 
            password: '123456'
        };
        this.props.processForm(demoUser);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {...this.state};
        this.props.processForm(user);
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

    render() {
        const { formType } = this.props;
        return (
            <div className='session-form-container'>
                <span className='session-form-type'>{formType} Form</span>
                <form className='session-form' onSubmit={this.handleSubmit}>
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
                    <button 
                        className='demo-login-btn'
                        onClick={this.handleDemoLogin}>Demo Login</button>
                </form>
            </div>
        );
    }
}

export default SessionForm;